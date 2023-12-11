import { Field, ObjectType } from "type-graphql";
import { Quote } from "../../../../domain/dto/Quote";

@ObjectType()
export class QuoteModel implements Quote {
    @Field(() => String)
    id: string;
    @Field(() => String)
    item_id: string;
    @Field(() => String)
    customer_id: string;
    @Field(() => Date)
    created_at: Date;

}