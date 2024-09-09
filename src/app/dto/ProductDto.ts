import { Category } from "../enums/Category";
import { ProductStatus } from "../enums/ProductStatus";


export interface ProductDto {
    
    
    productId    : number;
    name         :string;
    description  :string;
    price        :number;
    category     :Category;
    productStatus:ProductStatus;
    image         :string;
    

}