import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactDto } from "../dto/ContactDto";

@Injectable({
    providedIn: 'root'
})

export class ContactService{


    private     API_CONTACT = 'http://localhost:1998/api/contact';

    constructor(private http:HttpClient){

    }

    addContact(contactDto:ContactDto):Observable<ContactDto>{
      return  this.http.post<ContactDto>(`${this.API_CONTACT}/add_contact`,contactDto) 

    }

    fetchAllContact():Observable<ContactDto[]>{
        return this.http.get<ContactDto[]>(`${this.API_CONTACT}/get_all_contacts`)
    }


}