import { ProductStructure, Product as ProductDto } from "../../../../domain/dto/Product";
import { Resolver } from "../../../../domain/infra/Resolver";
import { RegisterProductHandler } from "./RegisterProductHandler";

export class RegisterProductResolver implements Resolver<ProductStructure, ProductDto> {
    constructor(private readonly productHandler: RegisterProductHandler) {}
    
    async execute(args: ProductStructure): Promise<ProductDto> {
        return await this.productHandler.handle(args);
    }
}