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
  
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.formData =  this.builder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      proofOfAddress: new FormControl('', [Validators.required]),
      identificationUrl: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(){

  }

}
