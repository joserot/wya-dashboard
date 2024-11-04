'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteProperty } from '../actions';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface Props {
  property: Property;
}

export function Product({ property }: Props) {
  return (
    <TableRow>
      <TableCell className="w-[100px] hidden sm:table-cell">
        <Image
          src={property.coverImage}
          alt="Product"
          width={100}
          height={100}
          className="object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{property.name}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {property.category.name}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`$${property.price}`}</TableCell>
      <TableCell className="hidden md:table-cell">
        {property.contacts ?? 0}
      </TableCell>
      <TableCell className="hidden md:table-cell">{property.slug}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={deleteProperty}>
                <Input type="hidden" name="id" value={property.id} />
                <button type="submit">Eliminar</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
