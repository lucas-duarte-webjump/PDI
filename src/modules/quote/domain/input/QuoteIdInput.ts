import { Field, InputType } from "type-graphql";
import { QuoteId as QuoteIdDto } from "../../../../domain/dto/Quote";

@InputType()
export class QuoteIdInput implements QuoteIdDto {
    @Field(() => String)
    id: string;
}