import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router){}

  navigateToLogIn() {
    this.router.navigate(['/login']);
  }

  get signinFormData(){
    return this.signinForm.controls;
  }

  ngOnInit(): void {
     this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
