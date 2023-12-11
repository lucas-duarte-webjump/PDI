import {randomUUID} from 'crypto';

export abstract class Entity<T> {
    public readonly _uid: string;
    public readonly props: T;

    get id(): string {
        return this._uid;
    }

    constructor(props: T, id?: string) {
        this._uid = id || randomUUID();
        this.props = props
    }
}