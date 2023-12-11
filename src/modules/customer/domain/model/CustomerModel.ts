import { Field, ObjectType } from "type-graphql";
import { Customer } from "../../../../domain/dto/Customer";

@ObjectType()
export class CustomerModel implements Customer {
    @Field(() => String)
    id: string;
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
    @Field(() => Date, { nullable: true })
    created_at: Date;
    @Field(() => Date, { nullable: true })
    updated_at: Date;

}