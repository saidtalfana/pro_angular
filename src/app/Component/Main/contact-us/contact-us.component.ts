import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  formContact !: FormGroup;

constructor(private fb: FormBuilder , private service: ContactService) { }

ngOnInit(): void {
this.contact()

}

   

contact(){
this.formContact = this.fb.group({
  name: ['', Validators.required],
  email: ['', Validators.required],
  phone: ['', Validators.required],
  message: ['', Validators.required],

});
}

onSubmit() {
const value = this.formContact.value

  this.service.addContact(value).subscribe()
  this.contact()

  console.log('contact submitted:', value);

  if(value){
    alert("contact added")
  }

  

  
}

}

