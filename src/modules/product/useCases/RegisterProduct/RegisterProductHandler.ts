import { Product as ProductDto, ProductStructure} from "../../../../domain/dto/Product";
import { Product } from "../../domain/product";
import { IProductRepository } from "../../repositories/IProductRepository";

export class RegisterProductHandler {
    constructor(private readonly productRepository: IProductRepository) {}

    async handle(data: ProductStructure): Promise<ProductDto> {
        const product = Product.create(data);

        const productExists = await this.productRepository.findBySku(data.sku);

        if (productExists) {
            throw new Error(`Product ${data.sku} already exists`);
        }

        return await this.productRepository.create(product);
    }
}