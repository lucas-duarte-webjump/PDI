import { ProductStock as ProductStockPersistence} from "@prisma/client"
import { ProductStock } from "../domain/productStock"

export class ProductStockMapping {
    static toDomain({status, available_quantity, product_id, id}: ProductStockPersistence): ProductStock {
        return ProductStock.create({
            status,
            available_quantity,
            product_id
        }, id)
    }

    static toPersistent(product: ProductStock): ProductStockPersistence {
        return {
            status: product.status,
            available_quantity: product.availableQuantity,
            product_id: product.productId,
            id: product.id
        }
    }
}