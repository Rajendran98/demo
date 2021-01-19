import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup , FormControl ,Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string;
  email:string;
  password:string;
  retUrl:string="visitor";

  form = new FormGroup({
  
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
  constructor() { }

  ngOnInit(): void {
  }

  
  onLoginClick(form) {

    if(this.form.invalid)
    {
      alert("Enter the details")
    }
    else{
      alert("success")
    }

  }
}
