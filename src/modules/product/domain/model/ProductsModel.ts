import { Field, ObjectType } from "type-graphql";
import { Products } from "../../../../domain/dto/Product";
import { ProductStock } from "../../../../domain/dto/ProductStock";
import { ProductStockModel } from "./ProductStockModel";

@ObjectType()
export class ProductsModel implements Products {
    @Field(() => [ProductStockModel])
    stock: ProductStockModel[];
    @Field(() => String)
    id: string;
    @Field(() => String)
    sku: string;
    @Field(() => String)
    name: string;
    @Field(() => String)
    image: string;
    @Field(() => String)
    created_at: Date;

}