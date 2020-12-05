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
      userID: new FormControl(''),
      pitchStatement: new FormControl('', [Validators.required]),
      cac: new FormControl('', [Validators.required]),
      attachments: new FormControl(''),
      assetDeclaration: new FormControl(''),
    })
  }

  onSubmit(){
    
  }

}
