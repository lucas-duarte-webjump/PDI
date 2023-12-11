import { QuoteItem, QuoteItemStructure } from "../../../domain/dto/QuoteItem";
import { Resolver } from "../../../domain/infra/Resolver";
import { QuoteItemRepository } from "../../../modules/quote/repositories/prisma/QuoteItemRepository";
import { RegisterQuoteItemHandler } from "../../../modules/quote/useCases/RegisterQuoteItem/RegisterQuoteItemHandler";
import { RegisterQuoteItemResolver } from "../../../modules/quote/useCases/RegisterQuoteItem/RegisterQuoteItemResolver";

export function makeRegisterQuoteItemResolver(): Resolver<QuoteItemStructure, QuoteItem> {
    const quoteItemRepository = new QuoteItemRepository();

    const registerQuoteItemHandler = new RegisterQuoteItemHandler(quoteItemRepository);

    return new RegisterQuoteItemResolver(registerQuoteItemHandler);
}