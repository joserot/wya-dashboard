'use client';

import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface Props {
  categories: Category[] | null;
}

export function TabsFilter({ categories }: Props) {
  if (!categories) return null;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === 'all') {
      params.delete('category');
    } else {
      params.set('category', value);
    }

    params.delete('page');

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <TabsList>
      <TabsTrigger value="all" onClick={(e) => handleChangeFilter('all')}>
        Todos
      </TabsTrigger>
      {categories.map((category) => (
        <TabsTrigger
          key={category.id}
          onClick={(e) => handleChangeFilter(category.slug)}
          value={category.slug}
        >
          {category.name}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
