import { IValidator } from "../../../../domain/IValidator";
import { Customer as CustomerDto, CustomerStructure } from "../../../../domain/dto/Customer";
import { Customer } from "../../domain/customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

export type ValidatorType = {
    regex: Map<string, RegExp>,
    data: Map<string, string>
}

export class RegisterCustomerHandler {
    constructor(
        private readonly customerRepository: ICustomerRepository,
        private readonly validator: IValidator<ValidatorType>
    ) {}

    async handle(data: CustomerStructure): Promise<CustomerDto> {
        let result = this.validator.execute(this.structValidatorData(data));

        if (!result.isValid) {
            throw new Error(JSON.stringify(result.error))
        }

        const customer = Customer.create(data);

        return await this.customerRepository.create(customer);
    }

    structValidatorData(data: CustomerStructure): ValidatorType {
        let regex = new Map<string, RegExp>()
            .set('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            .set('password', /^(?=.*\d.*\d.*\d)[A-Za-z\d]{3,}$/);

        let customerDataToValidate = new Map<string, string>()
            .set('email', data.email)
            .set('password', data.password)

        return {
            regex,
            data: customerDataToValidate
        }
    }
}