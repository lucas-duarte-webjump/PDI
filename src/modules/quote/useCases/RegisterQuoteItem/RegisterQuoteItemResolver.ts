import { QuoteItem as QuoteItemDto, QuoteItemStructure } from "../../../../domain/dto/QuoteItem";
import { Resolver } from "../../../../domain/infra/Resolver";
import { RegisterQuoteItemHandler } from "./RegisterQuoteItemHandler";

export class RegisterQuoteItemResolver implements Resolver<QuoteItemStructure, QuoteItemDto> {
    constructor(private readonly registerQuoteItemHandler: RegisterQuoteItemHandler) {}
    
    async execute(args: QuoteItemStructure): Promise<QuoteItemDto> {
        return await this.registerQuoteItemHandler.handle(args);
    }
}