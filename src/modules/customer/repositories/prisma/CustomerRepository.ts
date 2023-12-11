import { prisma } from "../../../../infra/database/prisma/client";
import { Customer } from "../../domain/customer";
import { CustomerMapping } from "../../mapping/CustomerMapping";
import { ICustomerRepository } from "../ICustomerRepository";
import { Customer as CustomerDTO } from "../../../../domain/dto/Customer";

export class CustomerRepository implements ICustomerRepository {
    async create(customer: Customer): Promise<CustomerDTO> {
        const percistenceCustomer = CustomerMapping.toPersistence(customer);

        await prisma.customer.create({data: percistenceCustomer});

        return percistenceCustomer;
    }
}