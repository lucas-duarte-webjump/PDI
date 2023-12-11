import { QuoteId, QuoteRelation } from "../../../domain/dto/Quote";
import { Resolver } from "../../../domain/infra/Resolver";
import { QuoteRepository } from "../../../modules/quote/repositories/prisma/QuoteRepository";
import { RetrieveQuoteByIdHandler } from "../../../modules/quote/useCases/RetrieveQuote/RetrieveQuoteByIdHandler";
import { RetrieveQuoteByIdResolver } from "../../../modules/quote/useCases/RetrieveQuote/RetrieveQuoteByIdResolver";

export function makeRegisterQuoteById(): Resolver<QuoteId, QuoteRelation> {
    const quoteRepository = new QuoteRepository();

    const retrieveQuoteHandler = new RetrieveQuoteByIdHandler(quoteRepository);

    return new RetrieveQuoteByIdResolver(retrieveQuoteHandler);
}