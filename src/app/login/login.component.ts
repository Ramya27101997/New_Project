import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginForm!: FormGroup;

  
  
  valid(formValues: any)
  {
    if(formValues.userName=="Ramya" && formValues.password=="test123")
     this.routes.navigateByUrl('orderPage')
    console.log(formValues);
  }

  constructor(private routes: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      userName: [''],
      password:[''],
      rmCheck:['']

    });
    
    
  }

}
