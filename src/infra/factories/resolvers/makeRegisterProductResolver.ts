import { Product, ProductStructure } from "../../../domain/dto/Product";
import { Resolver } from "../../../domain/infra/Resolver";
import { ProductRepository } from "../../../modules/product/repositories/prisma/ProductRepository";
import { RegisterProductHandler } from "../../../modules/product/useCases/RegisterProduct/RegisterProductHandler";
import { RegisterProductResolver } from "../../../modules/product/useCases/RegisterProduct/RegisterProductResolver";

export function makeRegisterProductResolver(): Resolver<ProductStructure, Product> {
    const productRepository = new ProductRepository();

    const productHandler = new RegisterProductHandler(productRepository);

    return new RegisterProductResolver(productHandler);
}