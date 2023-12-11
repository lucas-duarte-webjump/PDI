import { Field, InputType } from "type-graphql";
import { QuoteStructure } from "../../../../domain/dto/Quote";

@InputType()
export class QuoteInput implements QuoteStructure {
    @Field(() => String)
    item_id: string;
    @Field(() => String)
    customer_id: string;
    @Field(() => Date, {nullable: true})
    created_at: Date;
}