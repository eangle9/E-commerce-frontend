export interface Product {
  product_id: number;
  name: string;
  product_items: Item[];
  reviews: Review[];
}

export interface SingleProduct {
  product_id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  items: Item[];
  reviews: Review[];
}

export interface ProductSize {
  id: number;
  size: string;
  price: number;
  discount: number;
  qty_in_stock: number;
}

export interface Item {
  item_id: number;
  color: string;
  // size: string;
  image_url: string;
  price: number;
  discount: number;
  in_stock: number;
  sizes: ProductSize[];
}

export interface Review {
  review_id: number;
  user_id: number;
  product_id: number;
  rating: number;
  comment: string;
  created_at: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}
