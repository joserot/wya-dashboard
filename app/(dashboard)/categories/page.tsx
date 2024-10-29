import { CategoriesTable } from './components/categories-table';
import { getCategories } from '../services/get-categories';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function CustomersPage() {
  const categories = await getCategories();

  return (
    <>
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Añadir categoría
            </span>
          </Button>
        </div>
      </div>
      <CategoriesTable categories={categories} />
    </>
  );
}
