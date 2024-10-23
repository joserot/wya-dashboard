'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Product } from './product';
// import { SelectProduct } from '@/lib/db';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Product 1',
    status: 'In Stock',
    price: 5,
    stock: 10,
    availableAt: new Date(),
    imageUrl: '/placeholder-product.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    status: 'Out of Stock',
    price: 10,
    stock: 5,
    availableAt: new Date(),
    imageUrl: '/placeholder-product.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    status: 'In Stock',
    price: 15,
    stock: 8,
    availableAt: new Date(),
    imageUrl: '/placeholder-product.jpg'
  },
  {
    id: 4,
    name: 'Product 4',
    status: 'Out of Stock',
    price: 20,
    stock: 2,
    availableAt: new Date(),
    imageUrl: '/placeholder-product.jpg'
  },
  {
    id: 5,
    name: 'Product 5',
    status: 'In Stock',
    price: 25,
    stock: 7,
    availableAt: new Date(),
    imageUrl: '/placeholder-product.jpg'
  }
];

export function ProductsTable({
  offset,
  totalProducts
}: {
  offset: number;
  totalProducts: number;
}) {
  let router = useRouter();
  let productsPerPage = 5;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/?offset=${offset}`, { scroll: false });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inmuebles</CardTitle>
        <CardDescription>
          En está página se muestran todos los inmuebles disponibles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Portada</span>
              </TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead className="hidden md:table-cell">Precio</TableHead>
              <TableHead className="hidden md:table-cell">
                Clicks en contactar
              </TableHead>
              <TableHead className="hidden md:table-cell">Creado</TableHead>
              <TableHead>
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <Product key={product.id} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Mostrando{' '}
            <strong>
              {Math.min(offset - productsPerPage, totalProducts) + 1}-{offset}
            </strong>{' '}
            de <strong>{totalProducts}</strong> inmuebles
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === productsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + productsPerPage > totalProducts}
            >
              Siguiente
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}
