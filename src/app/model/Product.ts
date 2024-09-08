import { Category } from "../enums1/Category";
import { ProductStatus } from "../enums1/ProductStatus";
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
    provider:Provider;
    rating:Rating[];




}