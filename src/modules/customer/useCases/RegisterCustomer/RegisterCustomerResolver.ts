import {
    Customer as CustomerDTO,
    CustomerStructure as CustomerStructureInput
} from "../../../../domain/dto/Customer";
import { Resolver } from "../../../../domain/infra/Resolver";
import { RegisterCustomerHandler } from "./RegisterCustomerHandler";

export class RegisterCustomer implements Resolver<CustomerStructureInput, CustomerDTO> {
    constructor(private readonly customerHandler: RegisterCustomerHandler) {}

    async execute(args: CustomerStructureInput): Promise<CustomerDTO> {
        return await this.customerHandler.handle(args);
    }
}