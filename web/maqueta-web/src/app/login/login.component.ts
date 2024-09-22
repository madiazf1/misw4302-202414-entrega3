import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{
  
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }

  navigateToReport() {
    this.router.navigate(['/report']);
  }

  get loginFormData(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)]
    })
  }
}
