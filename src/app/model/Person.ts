import { Role } from "../enums/Role";


export interface Person{

    id: number;
    name: string;
    username: string; 
    password: string;
    email: string;
    roles : Role;
}