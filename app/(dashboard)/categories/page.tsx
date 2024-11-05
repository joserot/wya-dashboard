import { CategoriesTable } from './components/categories-table';
import { getCategories } from '../services/get-categories';
import { ButtonAddCategory } from './components/button-add-category';

export default async function CustomersPage() {
  let categories: Category[] = [];

  try {
    categories = await getCategories();
    if (!Array.isArray(categories)) {
      throw new Error('Expected an array of categories');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  return (
    <>
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <ButtonAddCategory />
        </div>
      </div>
      <CategoriesTable categories={categories} />
    </>
  );
}
