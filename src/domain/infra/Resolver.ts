export interface Resolver<T, U> {
    execute(args: T): Promise<U>;
}