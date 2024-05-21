import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  public signupForm : FormGroup;
  isSubmit = true;
  submitMessage = "";
  
  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.signupForm = this.formBuilder.group({
      'username': new FormControl ('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl ('', [Validators.required, Validators.minLength(6)]),
    });
   }

  ngOnInit(): void { 
    
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log(formData);

      // Make sure you have the right URL and method below
      this.http.post(`http://localhost:27017/users`, formData)
        .subscribe(response => {
          console.log(response);
          this.submitMessage = "Message Sent Successfully!";
          this.signupForm.reset();
        },
        error => {
          console.error(error);
          this.submitMessage = "Message not sent!";
        });
    }
  }
}