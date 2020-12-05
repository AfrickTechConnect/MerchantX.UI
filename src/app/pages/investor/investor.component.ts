import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {

  formData: FormGroup;
  constructor(
    private builder: FormBuilder,

  ) { }

  ngOnInit() {
    this.formData = this.builder.group({
      governmentIssuedID: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {

  }

}
