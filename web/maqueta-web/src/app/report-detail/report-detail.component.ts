import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportDetailComponent implements OnInit{
  reportDetailForm: FormGroup;
  constructor(private formBuilder: FormBuilder){}

  get reportDetailFormData(){
    return this.reportDetailForm.controls;
  }

  ngOnInit(): void {
    this.reportDetailForm = this.formBuilder.group({
    })
  }
}
