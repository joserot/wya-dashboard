import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import login from '@/app/(auth)/services/login';

import { redirect } from 'next/navigation';

import { getSession } from '@/app/(auth)/actions';

const verifySession = async () => {
  const user = await getSession();

  if (user) {
    redirect('/');
  }
};

export default async function LoginPage() {
  await verifySession();

  const handleSubmit = async (formData: FormData) => {
    'use server';

    const response: Response | undefined = await login(formData);

    if (!response) return;

    if (response && !response.ok) {
      return;
    }

    redirect('/');
  };

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
        </CardHeader>
        <CardFooter>
          <form action={handleSubmit} className="w-full">
            <Input
              placeholder="Email"
              type="email"
              className="w-full mb-4"
              name="email"
              required
            />
            <Input
              placeholder="Contraseña"
              type="password"
              className="w-full mb-4"
              name="password"
              required
            />
            <Button className="w-full">Ingresar</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
