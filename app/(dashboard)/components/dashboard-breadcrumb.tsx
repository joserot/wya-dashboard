'use client';

import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export function DashboardBreadcrumb() {
  const pathname = usePathname();

  const getBreadcrumbCategory = (): { label: string; href: string } => {
    if (pathname === '/categories') {
      return {
        label: 'Categorias',
        href: '/categories'
      };
    }

    return {
      label: 'Inmuebles',
      href: '/'
    };
  };

  const { label, href } = getBreadcrumbCategory();

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
