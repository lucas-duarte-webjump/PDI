export interface Customer {
    id: string
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

export type CustomerStructure = Omit<Customer, 'id'>;