import { QuoteItemStructure, QuoteItem as QuoteItemDto, QuoteItemRelation } from "../../../../domain/dto/QuoteItem";
import { prisma } from "../../../../infra/database/prisma/client";
import { QuoteItem } from "../../domain/quoteItem";
import { QuoteItemMapping } from "../../mapping/QuoteItemMapping";
import { IQuoteItemRepository } from "../IQuoteItemRepository";

export class QuoteItemRepository implements IQuoteItemRepository {
    async create(quoteItem: QuoteItem): Promise<QuoteItemDto> {
        const data = QuoteItemMapping.toPersistent(quoteItem);

        return await prisma.quoteItem.create({ data })
    }
}