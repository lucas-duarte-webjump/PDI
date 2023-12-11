import { ProductRepository } from "../../../modules/product/repositories/prisma/ProductRepository";
import { ProductStockRepository } from "../../../modules/product/repositories/prisma/ProductStockRepository";
import { RegisterProductStockHandler } from "../../../modules/product/useCases/RegisterProductStock/RegisterProductStockHandler";
import { RegisterProductStockResolver } from "../../../modules/product/useCases/RegisterProductStock/RegisterProductStockResolver";

export function makeRegisterProductStockResolver(): RegisterProductStockResolver {
    const productStockRepository = new ProductStockRepository();
    const productRepository = new ProductRepository();

    const productStockHandler = new RegisterProductStockHandler(
        productStockRepository,
        productRepository
    );

    return new RegisterProductStockResolver(productStockHandler);
}