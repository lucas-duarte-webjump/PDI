import { ProductStock as ProductStockDto} from "../../../../domain/dto/ProductStock";
import { prisma } from "../../../../infra/database/prisma/client";
import { ProductStock } from "../../domain/productStock";
import { ProductStockMapping } from "../../mapping/ProductStockMapping";
import { IProductStockRepository } from "../IProductStockRepository";

export class ProductStockRepository implements IProductStockRepository {
    async create(productStock: ProductStock): Promise<ProductStockDto> {
        const productStockPersistence = ProductStockMapping.toPersistent(productStock);

        return await prisma.productStock.create({data: productStockPersistence});
    }
}