import { ProductStock as ProductStockDto, ProductStockStructure } from "../../../../domain/dto/ProductStock";
import { Resolver } from "../../../../domain/infra/Resolver";
import { RegisterProductStockHandler } from "./RegisterProductStockHandler";

export class RegisterProductStockResolver implements Resolver<ProductStockStructure, ProductStockDto> {
    constructor(private readonly productStockHandler: RegisterProductStockHandler) {}
    
    async execute(args: ProductStockStructure): Promise<ProductStockDto> {
        return await this.productStockHandler.handle(args);
    }
}