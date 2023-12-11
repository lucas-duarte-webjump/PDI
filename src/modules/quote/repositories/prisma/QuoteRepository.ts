import { Quote as QuoteDto, QuoteRelation} from "../../../../domain/dto/Quote";
import { prisma } from "../../../../infra/database/prisma/client";

import { Quote } from "../../domain/quote";
import { QuoteMapping } from "../../mapping/QuoteMapping";
import { IQuoteRepository } from "../IQuoteRepository";

export class QuoteRepository implements IQuoteRepository {
    async create(quote: Quote): Promise<QuoteDto> {
        const data = QuoteMapping.toPersistent(quote);

        return await prisma.quote.create({ data });
    }

    async findById(id: string): Promise<QuoteRelation|null> {
        return await prisma.quote.findFirst({ 
            where: {id},
            include: {
                customer: true,
                item: {
                    include: {
                        product: {
                            include: {
                                stock: true
                            }
                        }
                    }
                }
            }
        });
    }

}