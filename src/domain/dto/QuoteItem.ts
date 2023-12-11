import { Product, Products } from "./Product";

export type QuoteItem = {
    id: string;
    product_id: string;
}

export type QuoteItemStructure = Omit<QuoteItem, 'id'>;

export type QuoteItemRelation = {
    id: string;
    product_id: string;
    product: Products
}