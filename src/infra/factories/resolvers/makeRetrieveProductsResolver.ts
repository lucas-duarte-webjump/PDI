import { ProductRepository } from "../../../modules/product/repositories/prisma/ProductRepository";
import { RetrieveAllProductsHandler } from "../../../modules/product/useCases/RetrieveAllProducts/RetrieveAllProductsHandler";
import { RetrieveAllProductsResolver } from "../../../modules/product/useCases/RetrieveAllProducts/RetrieveAllProductsResolve";

export function makeRetrieveProductsResolver(): RetrieveAllProductsResolver {
    const productRepository = new ProductRepository();

    const retrieveProductsHandler = new RetrieveAllProductsHandler(productRepository);

    return new RetrieveAllProductsResolver(retrieveProductsHandler);
}