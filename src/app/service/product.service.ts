import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductDto } from "../dto/ProductDto";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators"; 
import { Product } from "../model/Product";
import { EnterpriseDto } from "../dto/EnterpriseDto";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private API_PRODUCT = 'http://localhost:1998/api/product';
    private productsSubject = new Subject<ProductDto[]>();
    products$ = this.productsSubject.asObservable();

    constructor(private http: HttpClient) {}

    /** Add a new product */
    addProduct(productDto: ProductDto, enterprise_id: number, imageFile: File): Observable<ProductDto> {
        const formData = new FormData();
        formData.append('name', productDto.name);
        formData.append('description', productDto.description);
        formData.append('price', productDto.price.toString());
        formData.append('category', productDto.category);
        formData.append('productStatus', productDto.productStatus);
        formData.append('enterprise_id', enterprise_id.toString());
        formData.append('image', imageFile);

        return this.http.post<ProductDto>(`${this.API_PRODUCT}/add_product`, formData).pipe(
            tap(() => this.refreshProducts()) // Refresh product list after adding
        );
    }

    /** Fetch products with pagination */
    getProducts(page: number, size: number): Observable<any> {
        const params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());
        return this.http.get<any>(`${this.API_PRODUCT}/pagination`, { params });
    }

    /** Filter products based on criteria */
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

    /** Fetch all products by enterprise ID */
    getAllProductByEnterpriseId(enterprise_id: number): Observable<ProductDto[]> {
        return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/get_products_by_enterprise_id`, {
            params: { enterprise_id: enterprise_id.toString() }
        });
    }

    /** Delete a product */
    deleteProduct(product_id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.API_PRODUCT}/delete_product/${product_id}`).pipe(
            tap(() => this.refreshProducts()) // Refresh product list after deletion
        );
    }

    /** Get a product by ID */
    getProductById(product_id: number): Observable<ProductDto> {
        return this.http.get<ProductDto>(`${this.API_PRODUCT}/get_product/${product_id}`);
    }

    /** Fetch all products */
    fetchAllProduct(): Observable<ProductDto[]> {
        return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/get_all_product`).pipe(
            tap(products => this.productsSubject.next(products)) // Emit the list of products
        );
    }

    /** Helper method to refresh the products list */
    private refreshProducts() {
        this.fetchAllProduct().subscribe(products => {
            this.productsSubject.next(products);
        });
    }



    recommendByCategoryAndPrice(category: string, price: number): Observable<ProductDto[]> {
      let params = new HttpParams()
        .set('category', category)
        .set('price', price.toString());
  
      return this.http.get<ProductDto[]>(`${this.API_PRODUCT}/recommend`, { params });
    }
}
