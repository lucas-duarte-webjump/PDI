import { Product as ProductPersistence} from "@prisma/client";
import { Product } from "../domain/product";

export class ProductMapping {
    static toDomain({sku, image, name, created_at, id}: ProductPersistence): Product {
        return Product.create({
            sku,
            image,
            name,
            created_at
        }, id)
    }

    static toPersistent(product: Product): ProductPersistence {
        return {
            sku: product.sku,
            image: product.image,
            created_at: product.createdAt,
            name: product.name,
            id: product.id
        }
    }
}