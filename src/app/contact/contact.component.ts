import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name:string="";
  email:string="";
  message:string="";

  constructor() { }

  ngOnInit(): void {
  }

  submitForm()
  {
    alert("Изпратено!")
  }

}
