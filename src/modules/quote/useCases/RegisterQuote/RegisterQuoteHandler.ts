import { Quote as QuoteDto, QuoteStructure } from "../../../../domain/dto/Quote";
import { Quote } from "../../domain/quote";
import { IQuoteRepository } from "../../repositories/IQuoteRepository";

export class RegisterQuoteHandler {
    constructor(private readonly quoteRepository: IQuoteRepository) {}

    async handle(quote: QuoteStructure): Promise<QuoteDto> {
        const data = Quote.create(quote);

        return await this.quoteRepository.create(data);
    }
}