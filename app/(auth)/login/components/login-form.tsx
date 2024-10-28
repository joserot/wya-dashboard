'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import login from '@/app/(auth)/actions';
import { useFormState } from 'react-dom';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

const initialState = {
  message: ''
};

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      toast({
        variant: 'destructive',
        title: state?.message
      });
    }
  }, [state]);

  return (
    <form action={formAction} className="w-full">
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
  );
}
