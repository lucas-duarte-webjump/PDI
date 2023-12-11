import { Field, ObjectType } from "type-graphql";
import { Product } from "../../../../domain/dto/Product";

@ObjectType()
export class ProductModel implements Product {
    @Field(() => String)
    id: string;
    @Field(() => String)
    sku: string;
    @Field(() => String)
    name: string;
    @Field(() => String)
    image: string;
    @Field(() => Date, { nullable: true })
    created_at: Date;
}