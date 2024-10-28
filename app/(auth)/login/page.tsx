import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { redirect } from 'next/navigation';

import { getSession } from '@/app/(auth)/actions';

import LoginForm from './components/login-form';

const verifySession = async () => {
  const user = await getSession();

  if (user) {
    redirect('/');
  }
};

export default async function LoginPage() {
  await verifySession();

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
        </CardHeader>
        <CardFooter>
          <LoginForm />
        </CardFooter>
      </Card>
    </div>
  );
}
