interface Property {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  coverImage: string;
  images: string[];
  category: Category;
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
