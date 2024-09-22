import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserSettingsComponent implements OnInit {
  
  isOverlayVisible = false;
  
  userSettingsForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router){}

  get userSettingsFormData(){
    return this.userSettingsForm.controls;
  }

  saveChanges() {
    this.isOverlayVisible = true;

    setTimeout(() => {
        this.isOverlayVisible = false;
    }, 1000); // Show overlay for 1 second
  }

  cancelChanges(){
    this.router.navigate(['/report']);
  }

  navigateToDeletion() {
    this.router.navigate(['/user-deletion']);
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
