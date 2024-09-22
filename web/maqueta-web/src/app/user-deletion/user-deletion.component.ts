import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-deletion',
  templateUrl: './user-deletion.component.html',
  styleUrls: ['./user-deletion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDeletionComponent {

  userDeletionForm: FormGroup;
  constructor(private formBuilder: FormBuilder){}

  get userDeletionFormData(){
    return this.userDeletionForm.controls;
  }

  ngOnInit(): void {
    this.userDeletionForm = this.formBuilder.group({
      password: ['', Validators.required]
    })
  }
}
