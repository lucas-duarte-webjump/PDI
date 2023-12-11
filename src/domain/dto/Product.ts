import { ProductStock } from "./ProductStock";

export interface Product {
    id: string
    sku: string;
    name: string;
    image: string;
    created_at: Date;
}

export type ProductStructure = Omit<Product, 'id'>;

export type Products = {
    stock: ProductStock[];
    id: string
    sku: string;
    name: string;
    image: string;
    created_at: Date;
}