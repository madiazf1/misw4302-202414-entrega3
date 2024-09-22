import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-deletion',
  templateUrl: './user-deletion.component.html',
  styleUrls: ['./user-deletion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDeletionComponent {

  userDeletionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router){}

  navigateToLogIn() {
    this.router.navigate(['/login']);
  }

  navigateToUserSettings() {
    this.router.navigate(['/user-settings']);
  }

  get userDeletionFormData(){
    return this.userDeletionForm.controls;
  }

  ngOnInit(): void {
    this.userDeletionForm = this.formBuilder.group({
      password: ['', Validators.required]
    })
  }
}
