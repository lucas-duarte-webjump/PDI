import { Entity } from "../../../domain/Entity";
import { ProductStockStructure } from "../../../domain/dto/ProductStock";

export class ProductStock extends Entity<ProductStockStructure> {
    constructor(props: ProductStockStructure, id?: string) {
        super(props, id);
    }

    get productId(): string {
        return this.props.product_id;
    }

    get availableQuantity(): number {
        return this.props.available_quantity;
    }

    get status(): string {
        return this.props.status;
    }

    static create(props: ProductStockStructure, id?: string): ProductStock {
        return new ProductStock(props, id); 
    }
}