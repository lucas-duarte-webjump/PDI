import { Entity } from "../../../domain/Entity";
import { QuoteStructure } from "../../../domain/dto/Quote";

export class Quote extends Entity<QuoteStructure> {
    constructor(props: QuoteStructure, id?: string) {
        super(props, id);
    }

    get itemId(): string {
        return this.props.item_id
    }

    get customerId(): string {
        return this.props.customer_id;
    }

    get createdAt(): Date {
        return this.props.created_at;
    }

    static create(props: QuoteStructure, id?: string): Quote {
        return new Quote(props, id);
    }
}