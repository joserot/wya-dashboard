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
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Category } from './category';

interface Props {
  categories: Category[];
}

export function CategoriesTable({ categories }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categorías</CardTitle>
        <CardDescription>
          En esta página podés ver todas las categorías
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="hidden md:table-cell">
                Descripción
              </TableHead>

              <TableHead className="hidden md:table-cell">Acciones</TableHead>
              <TableHead>
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <Category category={category} key={category.id} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
