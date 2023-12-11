export type ProductStock = {
    id: string;
    product_id: string;
    available_quantity: number;
    status: string;
}

export type ProductStockStructure = Omit<ProductStock, 'id'>;