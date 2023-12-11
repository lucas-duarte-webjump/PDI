import { Customer } from "./Customer";
import { QuoteItemRelation } from "./QuoteItem";

export type Quote = {
    id: string;
    item_id: string;
    customer_id: string;
    created_at: Date;
}

export type QuoteStructure = Omit<Quote, 'id'>;

export type QuoteRelation = {
    id: string;
    item_id: string;
    customer_id: string;
    created_at: Date;
    customer: Customer
    item: QuoteItemRelation
}

export type QuoteId = Pick<Quote, 'id'>;