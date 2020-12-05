import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  formData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.formData = this.builder.group({
      cacDocumentUrl: new FormControl(''),
      attachmentPitchUrl: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(){
    
  }

}
