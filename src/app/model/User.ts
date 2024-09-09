import { Order } from "./Order"
import { Person } from "./Person"

export interface User extends Person{
    

    orders:Order[]
}