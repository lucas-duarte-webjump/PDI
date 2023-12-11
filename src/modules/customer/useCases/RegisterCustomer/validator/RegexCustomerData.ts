import { IValidator, ValidatorResult } from "../../../../../domain/IValidator";
import { ValidatorType } from "../RegisterCustomerHandler";


export class RegexCustomerData implements IValidator<ValidatorType> {
    
    execute({regex, data}: ValidatorType): ValidatorResult {
        let errors: string[] = [];
        
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        regex.forEach((regex, key) => {
            let result = data.get(key).match(regex)
            if (result === null) {
                errors.push(`Customer ${key} is invalid`)
            }
        })
        
        return {
            isValid: errors.length === 0,
            error: errors
        }
    }
    
}