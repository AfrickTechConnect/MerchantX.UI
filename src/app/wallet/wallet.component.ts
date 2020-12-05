import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  name = 'Wallet';
  acr
  formData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.acr = localStorage.getItem('ACR');
    this.formData = this.builder.group({
      amount: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {

  }

}
