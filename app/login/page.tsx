import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
        </CardHeader>
        <CardFooter>
          <form
            action={async () => {
              'use server';
              // await signIn('github', {
              //   redirectTo: '/'
              // });
            }}
            className="w-full"
          >
            <Input placeholder="Email" type="email" className="w-full mb-4" />
            <Input
              placeholder="Contraseña"
              type="password"
              className="w-full mb-4"
            />
            <Button className="w-full">Ingresar</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
