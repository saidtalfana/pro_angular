import { Time } from "@angular/common";
import { Product } from "./Product";
import { User } from "./User";


export interface Order{


      articleId      : number;
      articleTitle   : string;
      articleContent :string ;
      articleAuthor  : string;
      articleDate    : Date  ;
      articleType    :string ;
      articleImage   :string ;

      product:Product;
      user : User
}