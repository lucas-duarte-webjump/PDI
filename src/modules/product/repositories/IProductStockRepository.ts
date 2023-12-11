import { ProductStock as ProductStockDto } from "../../../domain/dto/ProductStock";
import { ProductStock } from "../domain/productStock";

export interface IProductStockRepository {
    create(productStock: ProductStock): Promise<ProductStockDto>;
}