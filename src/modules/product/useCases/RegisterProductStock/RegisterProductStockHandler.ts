import { ProductStock as ProductStockDto, ProductStockStructure } from "../../../../domain/dto/ProductStock";
import { ProductStock } from "../../domain/productStock";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IProductStockRepository } from "../../repositories/IProductStockRepository";

export class RegisterProductStockHandler {
    constructor(
        private readonly productStockRepository: IProductStockRepository,
        private readonly productRepository: IProductRepository
    ) {}
    
    async handle(productStock: ProductStockStructure): Promise<ProductStockDto> {
        const data = ProductStock.create(productStock);

        const productExists = await this.productRepository.findById(productStock.product_id);

        if (!productExists) {
            throw new Error(`Product not founded.`);
        }

        return await this.productStockRepository.create(data);
    }
}