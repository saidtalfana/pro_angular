import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDto } from '../dto/OrderDto';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private     API_ORDER = 'http://localhost:1998/api/order';


  constructor(private http:HttpClient) { }

                     //  <?----------------------------------Order -------------------------------------->

                    
                                         //  <?--------------add ------------------->

                     addOrder(orderDto :OrderDto,product_id : number ,user_id :number):Observable<OrderDto>{
                        return this.http.post<OrderDto>(`${this.API_ORDER}/add_order?product_id=${product_id}&user_id=${user_id}`,orderDto)
                          }
  
                                         //  <?--------------fetch all by user ------------------->

                   getAllOrdersByUserId(user_id:number):Observable<OrderDto[]>{
                              return this.http.get<OrderDto[]>(`${this.API_ORDER}/gets_order_by_user_id/${user_id}`)                   
                             }

                                         //  <?--------------fetch all by product ------------------->

                   getAllOrdersByProductId(product_id:number):Observable<OrderDto[]>{
                              return this.http.get<OrderDto[]>(`${this.API_ORDER}/gets_order_by_product_id/${product_id}`)                   
                   }
                                         //  <?--------------fetch all by enterprise ------------------->

                    getAllOrdersByEnterpriseId(enterprise_id:number):Observable<OrderDto[]>{
                         return this.http.get<OrderDto[]>(`${this.API_ORDER}/get_all_order_by_enterprise_id/${enterprise_id}`)                   
                                           }
                        

  
                                        //  <?--------------delete  ------------------->

                      deleteUser(order_id:number):Observable<OrderDto>{
                            return this.http.delete<OrderDto>(`${this.API_ORDER}/delete_order/${order_id}`)}
  
                                        //  <?--------------get  ------------------->

                     getOrderById(order_id  : number):Observable<OrderDto>{
                      return this.http.get<OrderDto>(`${this.API_ORDER}/get_order/${order_id}`)
                     }
  
  
                                       //  <?--------------update  ------------------->


                         updateOrder(orderDto : OrderDto):Observable<OrderDto>{
                          return this.http.put<OrderDto>(`${this.API_ORDER}/update_order`,orderDto)
                        }





}
