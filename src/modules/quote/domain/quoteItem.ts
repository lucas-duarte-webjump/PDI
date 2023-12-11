import { Entity } from "../../../domain/Entity";
import { QuoteItemStructure } from "../../../domain/dto/QuoteItem";

export class QuoteItem extends Entity<QuoteItemStructure> {
    constructor(props: QuoteItemStructure, id?: string) {
        super(props, id);
    }

    get productId(): string {
        return this.props.product_id;
    }

    static create(props: QuoteItemStructure, id?: string): QuoteItem {
        return new QuoteItem(props, id);
    }
}