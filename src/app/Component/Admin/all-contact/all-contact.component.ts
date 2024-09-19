import { Component, OnInit } from '@angular/core';
import { ContactDto } from 'src/app/dto/ContactDto';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent  implements OnInit {

  listContact!:ContactDto[]
constructor(private contactSerice:ContactService){

}

  ngOnInit(): void {
    this.fetchAllContact()
  }

  fetchAllContact(){
    this.contactSerice.fetchAllContact().subscribe((res:ContactDto[])=>{
      this.listContact = res
      console.log(res);
      
    })
  }

}
