import { Entity } from "../../../domain/Entity";
import { Product as ProductDto, ProductStructure } from "../../../domain/dto/Product";


export class Product extends Entity<ProductStructure> {
    constructor(props: ProductStructure, id?: string) {
        super(props, id);
    }

    get name(): string {
        return this.props.name;
    }

    get image(): string {
        return this.props.image;
    }

    get sku(): string {
        return this.props.sku
    }

    get createdAt(): Date {
        return this.props.created_at    
    }

    static create(props: ProductStructure, id?: string): Product {
        return new Product(props, id);
    }
}