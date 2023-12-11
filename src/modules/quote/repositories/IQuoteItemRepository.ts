import { QuoteItemStructure, QuoteItem as QuoteItemDto, QuoteItemRelation } from "../../../domain/dto/QuoteItem";
import { QuoteItem } from "../domain/quoteItem";

export interface IQuoteItemRepository {
    create(quoteItem: QuoteItem): Promise<QuoteItemDto>;
}