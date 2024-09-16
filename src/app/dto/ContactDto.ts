import { Time } from "@angular/common";

export interface ContactDto{


    contactId : number;
    name :string;
    email :string;
    date : Date;
    time :Time;
    phone :number;
    message :string;


}