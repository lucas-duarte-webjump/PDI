import { Product as ProductDto, Products} from "../../../../domain/dto/Product";
import { prisma } from "../../../../infra/database/prisma/client";
import { Product } from "../../domain/product";
import { ProductMapping } from "../../mapping/ProductMapping";
import { IProductRepository } from "../IProductRepository";

export class ProductRepository implements IProductRepository {
    async findAll(): Promise<Products[]> {
        return await prisma.product.findMany({include: {
            stock: true
        }})
    }

    async findById(id: string): Promise<ProductDto> {
        return await prisma.product.findFirst({ where: { id }});
    }

    async findBySku(sku: string): Promise<ProductDto> {
        const persistentProduct = await prisma.product.findUnique({ where:  { sku }});

        if (!persistentProduct) {
            return null;
        }

        return persistentProduct;
    }

    async create(product: Product): Promise<ProductDto> {
        const productPersistence = ProductMapping.toPersistent(product);

        return await prisma.product.create({data: productPersistence});;
    }
}