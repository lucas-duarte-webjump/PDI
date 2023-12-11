import { Quote, QuoteStructure } from "../../../domain/dto/Quote";
import { Resolver } from "../../../domain/infra/Resolver";
import { QuoteRepository } from "../../../modules/quote/repositories/prisma/QuoteRepository";
import { RegisterQuoteHandler } from "../../../modules/quote/useCases/RegisterQuote/RegisterQuoteHandler";
import { RegisterQuoteResolver } from "../../../modules/quote/useCases/RegisterQuote/RegisterQuoteResolver";

export function makeRegisterQuoteResolver(): Resolver<QuoteStructure, Quote> {
    const quoteRepository = new QuoteRepository();

    const registerQuoteHandler = new RegisterQuoteHandler(quoteRepository);

    return new RegisterQuoteResolver(registerQuoteHandler);
}