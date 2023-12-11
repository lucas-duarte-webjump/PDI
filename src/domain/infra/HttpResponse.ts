export type HttpResponse = {
    statusCode: number,
    body: any
}

export function ok<T = any>(dto: T): HttpResponse {
    return {
        statusCode: 200,
        body: dto
    }
}

export function created(): HttpResponse {
    return {
        statusCode: 201,
        body: undefined
    }
}

export function fail({stack, message}: Error): HttpResponse {
    return {
        statusCode: 500,
        body: {
            error: message,
            stack
        }
    }
}