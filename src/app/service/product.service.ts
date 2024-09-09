import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductDto } from "../dto/ProductDto";
import { Observable } from "rxjs";
import { Product } from "../model/Product";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {



    private     API_PRODUCT = 'http://localhost:1998/api/product';


    constructor(private http:HttpClient){

    }
    

//  <?----------------------------------Product -------------------------------------->


                      //  <?--------------add Product ------------------->

                      addProduct(productDto : ProductDto){
                        return this.http.post<ProductDto>(`${this.API_PRODUCT}/add_product`,productDto)}

                      //  <?--------------All Products ------------------->

                      getAllProductByProvuderId(provider_id:number):Observable<ProductDto[]>{
                        return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/get_products_by_provider_id?provider_id=${provider_id}`)                   
                       }
                   //  <?--------------Delete Product ------------------->

                   deleteProduct(product_id : number):Observable<Product>{
                   return this.http.delete<Product>(`${this.API_PRODUCT}/delete_product/${product_id}`)
                   }

                   //  <?--------------get Product ------------------->

                   getProductById(product_id  : number):Observable<ProductDto>{
                    return this.http.get<ProductDto>(`${this.API_PRODUCT}/get_product/${product_id}`)
                   }
  }
