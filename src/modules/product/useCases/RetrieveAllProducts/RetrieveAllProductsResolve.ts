import { Products } from "../../../../domain/dto/Product";
import { Resolver } from "../../../../domain/infra/Resolver";
import { RetrieveAllProductsHandler } from "./RetrieveAllProductsHandler";

export class RetrieveAllProductsResolver implements Resolver<null, Products[]> {
    constructor(private readonly retrieveProductsHandler: RetrieveAllProductsHandler) {}
    
    async execute(args: null): Promise<Products[]> {
        return await this.retrieveProductsHandler.handle();
    }

}