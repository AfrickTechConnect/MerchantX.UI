import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string = 'Profile'
  formData: FormGroup;
  user
  acr
  val = true
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.acr = localStorage.getItem('ACR');
    this.user = JSON.parse(localStorage.getItem('USERDET'))
    console.log(this.user)
    this.formData =  this.builder.group({
      firstname: new FormControl(this.user['firstname'], [Validators.required]),
      lastname: new FormControl(this.user['lastname'], [Validators.required]),
      email: new FormControl(this.user['email'], [Validators.required]),
      address: new FormControl(this.user['address'], [Validators.required]),
      proofAddress: new FormControl(this.user['proofAddress'], [Validators.required]),
      identificationUrl: new FormControl(this.user['identificationUrl'], [Validators.required]),
    })
  }

  onSubmit(){

  }

}
