import { Customer as PersistenceCustomer} from "@prisma/client";
import { Customer } from "../domain/customer";

export class CustomerMapping {
    static toDomain(raw: PersistenceCustomer): Customer {
        return Customer.create({
            created_at: raw.created_at,
            updated_at: raw.updated_at,
            email: raw.email,
            first_name: raw.first_name,
            last_name: raw.last_name,
            password: raw.password,
            phone: raw.phone
        }, raw.id)
    }

    static toPersistence(customer: Customer): PersistenceCustomer {
        return {
            id: customer.id,
            first_name: customer.firstName,
            last_name: customer.lastName,
            email: customer.email,
            phone: customer.phone,
            password: customer.password,
            updated_at: customer.updatedAt,
            created_at: customer.createdAt
        }
    }
}