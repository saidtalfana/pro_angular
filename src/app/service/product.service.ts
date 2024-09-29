import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductDto } from "../dto/ProductDto";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators"; // Import tap operator
import { Product } from "../model/Product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private API_PRODUCT = 'http://localhost:1998/api/product';
    private productsSubject = new Subject<ProductDto[]>(); // Subject to manage product updates
    products$ = this.productsSubject.asObservable(); // Observable to subscribe to

    constructor(private http: HttpClient) {}

    // Add Product
    addProduct(productDto: ProductDto, enterprise_id: number, imageFile: File) {
        const formData = new FormData();
        formData.append('name', productDto.name);
        formData.append('description', productDto.description);
        formData.append('price', productDto.price.toString());
        formData.append('category', productDto.category);
        formData.append('productStatus', productDto.productStatus);
        formData.append('enterprise_id', enterprise_id.toString());
        formData.append('image', imageFile);

        return this.http.post<ProductDto>(`${this.API_PRODUCT}/add_product`, formData).pipe(
            tap(() => {
                // Fetch all products after adding a new one and emit the updated list
                this.fetchAllProduct().subscribe(products => {
                    this.productsSubject.next(products);
                });
            })
        );
    }

    // Fetch all products by pagination

    getProducts(page: number, size: number): Observable<any> {
      const params = new HttpParams()
          .set('page', page.toString())
          .set('size', size.toString());
      return this.http.get<any>(`${this.API_PRODUCT}/pagination`, { params });
  }

  // filter

  filterProducts(category: string, minPrice: number | null, maxPrice: number | null, name: string): Observable<ProductDto[]> {
    let params = new HttpParams();

    if (category) {
        params = params.set('category', category);
    }
    if (minPrice) {
        params = params.set('minPrice', minPrice.toString());
    }
    if (maxPrice) {
        params = params.set('maxPrice', maxPrice.toString());
    }
    if (name) {
        params = params.set('name', name);
    }

    return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/filter`, { params });
}
  
    // Fetch all products by enterprise ID
    getAllProductByEnterpriseId(enterprise_id: number): Observable<ProductDto[]> {
        return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/get_products_by_enterprise_id?enterprise_id=${enterprise_id}`);
    }

    // Delete Product
    deleteProduct(product_id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.API_PRODUCT}/delete_product/${product_id}`).pipe(
            tap(() => {
                // Fetch all products after deletion and emit the updated list
                this.fetchAllProduct().subscribe(products => {
                    this.productsSubject.next(products);
                });
            })
        );
    }

    // Get Product by ID
    getProductById(product_id: number): Observable<ProductDto> {
        return this.http.get<ProductDto>(`${this.API_PRODUCT}/get_product/${product_id}`);
    }

    // Fetch all products
    fetchAllProduct(): Observable<ProductDto[]> {
        return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/get_all_product`).pipe(
            tap((products) => {
                this.productsSubject.next(products); // Emit the list of products
            })
        );
    }
}










// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { ProductDto } from "../dto/ProductDto";
// import { Observable } from "rxjs";
// import { Product } from "../model/Product";

// @Injectable({
//     providedIn: 'root'
//   })
//   export class ProductService {



//     private     API_PRODUCT = 'http://localhost:1998/api/product';


//     constructor(private http:HttpClient){

//     }
    

// //  <?----------------------------------Product -------------------------------------->


//                       //  <?--------------add Product ------------------->

//                       // addProduct(productDto : ProductDto,enterprise_id : number){
//                       //   return this.http.post<ProductDto>(`${this.API_PRODUCT}/add_product?enterprise_id=${enterprise_id}`,productDto)}

//                       addProduct(productDto: ProductDto, enterprise_id: number, imageFile: File) {
//                         const formData = new FormData();
//                         formData.append('name', productDto.name);
//                         formData.append('description', productDto.description);
//                         formData.append('price', productDto.price.toString());
//                         formData.append('category', productDto.category);
//                         formData.append('productStatus', productDto.productStatus);
//                         formData.append('enterprise_id', enterprise_id.toString());
//                         formData.append('image', imageFile);
                    
//                         return this.http.post<ProductDto>(`${this.API_PRODUCT}/add_product`, formData);
//                     }
                    

//                       //  <?--------------All Products ------------------->
                      
//                       getAllProductByEnterpriseId(enterprise_id:number):Observable<ProductDto[]>{
//                         return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/get_products_by_enterprise_id?enterprise_id=${enterprise_id}`)                   
//                        }
//                    //  <?--------------Delete Product ------------------->

//                    deleteProduct(product_id : number):Observable<Product>{
//                    return this.http.delete<Product>(`${this.API_PRODUCT}/delete_product/${product_id}`)
//                    }

//                    //  <?--------------get Product ------------------->

//                    getProductById(product_id  : number):Observable<ProductDto>{
//                     return this.http.get<ProductDto>(`${this.API_PRODUCT}/get_product/${product_id}`)
//                    }

//                    fetchAllProduct():Observable<ProductDto[]>{
//                      return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/get_all_product`)
//                    }
//   }


