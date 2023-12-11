import { QuoteItem as QuoteItemPersistence } from "@prisma/client";
import { QuoteItem } from "../domain/quoteItem";

export class QuoteItemMapping {
    static toDomain({product_id, id}: QuoteItemPersistence): QuoteItem {
        return QuoteItem.create({
            product_id
        }, id);
    }

    static toPersistent(quoteItem: QuoteItem): QuoteItemPersistence {
        return {
            id: quoteItem.id,
            product_id: quoteItem.productId
        };
    }
}