import { Field, ObjectType } from "type-graphql";
import { Customer } from "../../../../domain/dto/Customer";
import { QuoteRelation as QuoteRelationDto } from "../../../../domain/dto/Quote";
import { CustomerModel } from "../../../customer/domain/model/CustomerModel";
import { QuoteItemRelation } from "./QuoteItemRelation";

@ObjectType()
export class QuoteRelation implements QuoteRelationDto {
    @Field(() => QuoteItemRelation)
    item: QuoteItemRelation;
    @Field(() => String)
    id: string;
    @Field(() => String)
    item_id: string;
    @Field(() => String)
    customer_id: string;
    @Field(() => Date)
    created_at: Date;
    @Field(() => CustomerModel)
    customer: Customer;

}