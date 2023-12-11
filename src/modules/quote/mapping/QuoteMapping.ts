import { Quote as QuotePersistence } from "@prisma/client";
import { Quote } from "../domain/quote";

export class QuoteMapping {
    static toPersistent(quote: Quote): QuotePersistence {
        return {
            customer_id: quote.customerId,
            created_at: quote.createdAt,
            id: quote.id,
            item_id: quote.itemId,
        }
    }

    static toDomain(raw: QuotePersistence): Quote {
        return Quote.create({
            created_at: raw.created_at,
            customer_id: raw.customer_id,
            item_id: raw.item_id,
        }, raw.id);
    }
}