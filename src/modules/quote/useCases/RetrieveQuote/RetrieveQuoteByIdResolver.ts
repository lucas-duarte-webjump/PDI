import { Quote, QuoteId } from "../../../../domain/dto/Quote";
import { Resolver } from "../../../../domain/infra/Resolver";
import { QuoteRelation } from "../../domain/model/QuoteRelation";
import { RetrieveQuoteByIdHandler } from "./RetrieveQuoteByIdHandler";

export class RetrieveQuoteByIdResolver implements Resolver<QuoteId, QuoteRelation> {
    constructor(private readonly retrieveQuoteHandler: RetrieveQuoteByIdHandler) {}
    
    async execute(args: QuoteId): Promise<QuoteRelation> {
        return await this.retrieveQuoteHandler.handle(args);
    }
}