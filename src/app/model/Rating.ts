import { Product } from "./Product";

export interface Rating{

   ratingId:number;
    stars:number;
    comment:string;

    product:Product
}