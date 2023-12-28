export interface User {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    city: string;
    zipcode: string;
}

export interface UserForm extends Partial<User> {
}

export interface LoginForm {
    email: string;
    password: string;
}
