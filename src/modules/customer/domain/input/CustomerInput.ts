import { Field, InputType } from "type-graphql";
import { CustomerStructure } from "../../../../domain/dto/Customer";

@InputType()
export class CreateCustomerInput implements CustomerStructure {
    @Field(() => String)
    first_name: string;
    @Field(() => String)
    last_name: string;
    @Field(() => String)
    phone: string;
    @Field(() => String)
    email: string;
    @Field(() => String)
    password: string;
    @Field(() => Date, {nullable: true})
    created_at: Date;
    @Field(() => String, {nullable: true})
    updated_at: Date;

}