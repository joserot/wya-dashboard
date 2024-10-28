'use server';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from './components/products-table';
import { getProperties } from './services/get-properties';

export default async function ProductsPage() {
  // const searchParams = await props.searchParams;
  // const search = searchParams.q ?? '';
  // const offset = searchParams.offset ?? 0;

  let properties: Property[] = [];

  try {
    properties = await getProperties();
    if (!Array.isArray(properties)) {
      throw new Error('Expected an array of properties');
    }
  } catch (error) {
    console.error('Error fetching properties:', error);
  }

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Activos</TabsTrigger>
          <TabsTrigger value="draft">Inactivos</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Añadir inmueble
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <ProductsTable
          properties={properties}
          offset={properties.length}
          totalProperties={100}
        />
      </TabsContent>
    </Tabs>
  );
}
