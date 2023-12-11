import { Quote as QuoteDto, QuoteStructure } from "../../../../domain/dto/Quote";
import { Resolver } from "../../../../domain/infra/Resolver";
import { RegisterQuoteHandler } from "./RegisterQuoteHandler";

export class RegisterQuoteResolver implements Resolver<QuoteStructure, QuoteDto> {
    constructor(private readonly registerQuoteHandler: RegisterQuoteHandler) {}
    
    async execute(args: QuoteStructure): Promise<QuoteDto> {
        return await this.registerQuoteHandler.handle(args);
    }

}