import { Field, ObjectType } from "type-graphql";
import { ProductStock } from "../../../../domain/dto/ProductStock";

@ObjectType()
export  class ProductStockModel implements ProductStock {
    @Field(() => String)
    id: string;
    @Field(() => String)
    product_id: string;
    @Field(() => String)
    available_quantity: number;
    @Field(() => String)
    status: string;

}