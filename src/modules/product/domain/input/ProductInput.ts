import { Field, InputType } from "type-graphql";
import { ProductStructure } from "../../../../domain/dto/Product";

@InputType()
export class ProductInput implements ProductStructure {
    @Field(() => String)
    sku: string;
    @Field(() => String)
    name: string;
    @Field(() => String)
    image: string;
    @Field(() => Date, {nullable: true})
    created_at: Date;

}