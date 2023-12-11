import { Validator } from "../../../domain/Validator";
import { Customer, CustomerStructure } from "../../../domain/dto/Customer";
import { Resolver } from "../../../domain/infra/Resolver";
import { CustomerRepository } from "../../../modules/customer/repositories/prisma/CustomerRepository";
import { RegisterCustomerHandler } from "../../../modules/customer/useCases/RegisterCustomer/RegisterCustomerHandler";
import { RegisterCustomer } from "../../../modules/customer/useCases/RegisterCustomer/RegisterCustomerResolver";
import { RegexCustomerData } from "../../../modules/customer/useCases/RegisterCustomer/validator/RegexCustomerData";

export function makeRegisterCustomerResolver(): Resolver<CustomerStructure, Customer> {
    const customerRepository = new CustomerRepository();

    const regexCustomerValidator = new RegexCustomerData();
    const validatorChain = new Validator([regexCustomerValidator]);

    const customerHandler = new RegisterCustomerHandler(
        customerRepository,
        validatorChain
    );
    return new RegisterCustomer(customerHandler);
}