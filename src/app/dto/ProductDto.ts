import { Category } from "../enums1/Category";
import { ProductStatus } from "../enums1/ProductStatus";

export interface ProductDto {
    
    
    productId    : number;
    name         :string;
    description  :string;
    price        :number;
    category     :Category;
    productStatus:ProductStatus;
    image         :string;
    

}