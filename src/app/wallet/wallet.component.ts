import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { InvestorService } from '../investor.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  name = 'Wallet';
  acr
  user
  formData: FormGroup;
  isLoading = false;
  balance = 0;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private walletService: WalletService,
    private investorService: InvestorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('USER'));
    this.acr = localStorage.getItem('ACR');
    this.formData = this.builder.group({
      amount: new FormControl('', [Validators.required])
    })

    this.investorService.investorMetrics(this.user['token']).subscribe(res => {
      this.balance = res['data']['balance']
    })
  }
  onSubmit(){
    console.log('here')
    const data = this.formData.value
    this.isLoading = true
    this.walletService
      .fundWallet(data, this.user['token'])
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe(
        (res) => {
          this.toastr.success(
            res['data'].message,
             'Wallet'
           )
        },
        (error) => {
          if (error.status === 401 || 403 || 404 || 400 || 500)
            this.toastr.error(
             error.error['data'].message,
              'Wallet'
            )
        }
      )
  }

}
