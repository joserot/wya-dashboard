interface Property {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  coverImage: string;
  images: string[];
  category: Category;
  contacts: number | null;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

interface User {
  id: number;
  name: string;
  lastName: string;
  fullName: string;
  email: string;
}

interface PropertiesResult {
  properties: Property[];
  totalProperties: number;
  totalPages: number;
  currentPage: number;
}
