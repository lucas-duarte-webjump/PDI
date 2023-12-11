import { Field, InputType } from "type-graphql";
import { ProductStockStructure } from "../../../../domain/dto/ProductStock";

@InputType()
export class ProductStockInput implements ProductStockStructure {
    @Field(() => String)
    product_id: string;
    @Field(() => Number)
    available_quantity: number;
    @Field(() => String)
    status: string;
    
}