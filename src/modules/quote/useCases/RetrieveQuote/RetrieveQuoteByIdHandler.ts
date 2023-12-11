import { Quote, QuoteId } from "../../../../domain/dto/Quote";
import { QuoteRelation } from "../../domain/model/QuoteRelation";
import { IQuoteRepository } from "../../repositories/IQuoteRepository";

export class RetrieveQuoteByIdHandler {
    constructor(private readonly quoteRepository: IQuoteRepository) {
    }

    async handle(data: QuoteId): Promise<QuoteRelation> {
        const quote = await this.quoteRepository.findById(data.id);
        console.log(quote);
        if (!quote) {
            throw new Error('Could not find quote.');
        }

        return quote;
    }
}