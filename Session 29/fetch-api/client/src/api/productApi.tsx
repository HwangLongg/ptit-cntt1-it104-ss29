import { Product } from "../types/product";

export async function getAllProduct(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
