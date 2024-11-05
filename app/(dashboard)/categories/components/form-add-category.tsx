import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { addCategory } from '../actions';
import { useFormState } from 'react-dom';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

const initialState = {
  message: '',
  ok: false
};

interface Props {
  setOpen: (open: boolean) => void;
}

export function FormAddCategory({ setOpen }: Props) {
  const [state, formAction] = useFormState(addCategory, initialState);

  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      toast({
        variant: state?.ok ? 'default' : 'destructive',
        title: state?.message
      });
      state.ok && setOpen(false);
    }
  }, [state]);

  return (
    <>
      <form action={formAction} id="add-category" className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nombre
          </Label>
          <Input id="name" name="name" required className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Slug
          </Label>
          <Input id="slug" name="slug" required className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Descripción
          </Label>
          <Textarea
            id="description"
            name="description"
            className="col-span-3"
          />
        </div>
      </form>
      <DialogFooter>
        <Button form="add-category" type="submit">
          Guardar cambios
        </Button>
      </DialogFooter>
    </>
  );
}
