import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { MerchantService } from 'src/app/merchant.service';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  formData: FormGroup;
  user
  isLoading = false
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private merchant: MerchantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('USER'))
    this.formData = this.builder.group({
      cacDocumentUrl: new FormControl(''),
      attachmentPitchUrl: new FormControl('', [Validators.required]),
    });


  }

  onSubmit(){
    this.isLoading = true
    console.log(this.user)
    this.merchant
      .addMerchant(this.formData.value, this.user['token'])
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe(
        (res) => {
          this.toastr.success(
            res['data'].message,
            'Merchant Account'
          )
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          if (error.status === 401 || 403 || 404 || 400 || 500)
            this.toastr.error(
             error.error['data'].message,
              'Merchant Account'
            )
        }
      )
  }

}
