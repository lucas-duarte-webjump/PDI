import { Customer as CustomerDTO } from "../../../domain/dto/Customer";
import { Customer } from "../domain/customer";


export interface ICustomerRepository {
    create(customer: Customer): Promise<CustomerDTO>;
}