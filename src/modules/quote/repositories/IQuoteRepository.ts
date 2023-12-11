import { Quote as QuoteDto, QuoteRelation } from "../../../domain/dto/Quote";
import { Quote } from "../domain/quote";

export interface IQuoteRepository {
    create(quote: Quote): Promise<QuoteDto>;

    findById(id: string): Promise<QuoteRelation|null>;
}