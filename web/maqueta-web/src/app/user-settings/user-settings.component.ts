import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserSettingsComponent implements OnInit {
  userSettingsForm: FormGroup;
  constructor(private formBuilder: FormBuilder){}

  get userSettingsFormData(){
    return this.userSettingsForm.controls;
  }

  ngOnInit(): void {
    this.userSettingsForm = this.formBuilder.group({
      username: ['John Doe', Validators.required],
      birthDate: [new Date(), Validators.required],
      email: ['johndoe@gmail.com', Validators.required],
      password: ['123456', Validators.required]
    })
  }
}
