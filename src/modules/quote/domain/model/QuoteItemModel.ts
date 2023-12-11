import { Field, ObjectType } from "type-graphql";
import { QuoteItem } from "../../../../domain/dto/QuoteItem";

@ObjectType()
export class QuoteItemModel implements QuoteItem {
    @Field(() => String)
    id: string;
    @Field(() => String)
    product_id: string;
}