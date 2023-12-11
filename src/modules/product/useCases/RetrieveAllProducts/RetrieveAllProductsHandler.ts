import { Products } from "../../../../domain/dto/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

export class RetrieveAllProductsHandler {
    constructor(private readonly productRepository: IProductRepository) {}

    async handle(): Promise<Products[]> {
        const data =  await this.productRepository.findAll();

        return data;
    }
}