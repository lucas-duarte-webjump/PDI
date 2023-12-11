import { Field, ObjectType } from "type-graphql";
import { Products } from "../../../../domain/dto/Product";
import { QuoteItemRelation as QuoteItemRelationDto } from "../../../../domain/dto/QuoteItem";
import { ProductsModel } from "../../../product/domain/model/ProductsModel";

@ObjectType()
export class QuoteItemRelation implements QuoteItemRelationDto {
    @Field(() => String)
    id: string;
    @Field(() => String)
    product_id: string;
    @Field(() => ProductsModel)
    product: ProductsModel;
}