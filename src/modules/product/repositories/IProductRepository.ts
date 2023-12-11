import { Product as ProductDto, Products } from "../../../domain/dto/Product";
import { Product } from "../domain/product";

export interface IProductRepository {
    create(product: Product): Promise<ProductDto>

    findBySku(sku: string): Promise<ProductDto|null>

    findById(id: string): Promise<ProductDto|null>

    findAll(): Promise<Products[]>
}