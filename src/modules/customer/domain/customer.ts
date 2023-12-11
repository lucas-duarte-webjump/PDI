import { Entity } from "../../../domain/Entity";
import { CustomerStructure } from "../../../domain/dto/Customer";
import {hashSync} from 'bcrypt';

export class Customer extends Entity<CustomerStructure> {
    private constructor(props: CustomerStructure, id?: string) {
        super(props, id)
    }

    get email() {
        return this.props.email;
    }

    get password(): string {
        return hashSync(this.props.password, 8);
    }

    get firstName(): string {
        return this.props.first_name;
    }

    get lastName(): string {
        return this.props.last_name;
    }

    get phone(): string {
        return this.props.phone;
    }

    get createdAt(): Date {
        return this.props.created_at    
    }

    get updatedAt(): Date {
        return this.props.updated_at
    }

    static create(
        props: CustomerStructure,
        id?: string
      ): Customer {
        return new Customer(props, id);
      }
}