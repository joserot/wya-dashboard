'use server';

import { Tabs, TabsContent } from '@/components/ui/tabs';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from './components/products-table';
import { getProperties } from './services/get-properties';
import { getCategories } from './services/get-categories';
import { TabsFilter } from './components/tabs-filter';

export default async function ProductsPage({
  searchParams
}: {
  searchParams: { page?: string; category?: string };
}) {
  const page = searchParams.page ?? '1';
  const category = searchParams.category ?? null;

  let result: PropertiesResult | null = null;
  let categories: Category[] | null = await getCategories();

  try {
    result = await getProperties(page, category);
  } catch (error) {
    console.error('Error fetching properties:', error);
  }

  if (!result || !categories) return null;

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsFilter categories={categories} />
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
          properties={result.properties}
          totalPages={result.totalPages}
          currentPage={page}
          title="Inmuebles"
          description="En está página se muestran todos los inmuebles disponibles"
        />
      </TabsContent>
      {categories.map((c) => {
        return (
          <TabsContent key={c.id} value={c.slug}>
            <ProductsTable
              properties={result.properties}
              totalPages={result.totalPages}
              currentPage={page}
              title={c.name}
              description={c.description}
            />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
