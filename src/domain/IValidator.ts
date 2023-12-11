export type ValidatorResult = {
    isValid: boolean,
    error: string[]
}

export interface IValidator<T = any> {
    execute(data: T): ValidatorResult
}