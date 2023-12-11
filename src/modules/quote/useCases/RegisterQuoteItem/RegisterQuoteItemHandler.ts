import { QuoteItem as QuoteItemDto, QuoteItemStructure } from "../../../../domain/dto/QuoteItem";
import { QuoteItem } from "../../domain/quoteItem";
import { IQuoteItemRepository } from "../../repositories/IQuoteItemRepository";

export class RegisterQuoteItemHandler {
    constructor(private readonly quoteItemRepository: IQuoteItemRepository) {}

    async handle(data: QuoteItemStructure): Promise<QuoteItemDto> {
        const quote = QuoteItem.create(data);

        return await this.quoteItemRepository.create(quote);
    }
}