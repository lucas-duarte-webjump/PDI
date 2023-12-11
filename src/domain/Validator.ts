import { IValidator, ValidatorResult } from "./IValidator";

export class Validator<T> implements IValidator {
    constructor(private readonly validators: IValidator[]) {}

    execute(data: T): ValidatorResult {
        let errors: string[] = [];

        this.validators.forEach(
            validator => {
                let result = validator.execute(data);

                if (!result.isValid) {
                    errors.push(...result.error);
                }
            }
        )
        
        return {
            isValid: errors.length === 0,
            error: errors
        }
    }
}