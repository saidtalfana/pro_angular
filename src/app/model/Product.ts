import { Category } from "../enums/Category";
import { ProductStatus } from "../enums/ProductStatus";
import { Enterprise } from "./enterprise";
import { Order } from "./Order";
import { Rating } from "./Rating";

export interface Product{

    productId:number;
    name:string;
    description:string;
    price:number;
    category:Category;
    productStatus:ProductStatus;
    image:string;

    order:Order[]
    enterprise:Enterprise;
    rating:Rating[];




}