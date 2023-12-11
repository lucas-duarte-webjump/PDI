import { Field, InputType } from "type-graphql";
import { QuoteItem, QuoteItemStructure } from "../../../../domain/dto/QuoteItem";

@InputType()
export class QuoteItemInput implements QuoteItemStructure {
    @Field(() => String)
    product_id: string;

}