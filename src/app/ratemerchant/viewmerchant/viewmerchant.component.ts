import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { MerchantService } from 'src/app/merchant.service';

@Component({
  selector: 'app-viewmerchant',
  templateUrl: './viewmerchant.component.html',
  styleUrls: ['./viewmerchant.component.css']
})
export class ViewmerchantComponent implements OnInit {


  @Input() merchant;
  creditScore = 1;
  user
  formData: FormGroup
  isLoading = false
  constructor(
    private toastr: ToastrService,
    private activeModal: NgbActiveModal,
    private merchanService: MerchantService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('USER'))
    this.formData = this.builder.group({
      creditScore: new FormControl('', [Validators.required]),
      id: new FormControl('')
    });
  }

  dismissModal(){
    this.activeModal.close();
  }
  setCreditScore(value){
    this.creditScore = value
  }


  onSubmit(){
    console.log(this.user['token'])
    const data = this.formData.value;
    data.id = this.merchant['id']
    this.isLoading = true
    this.merchanService.rateMerchant(data, this.user['token'])
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe(
        (res) => {
          this.toastr.success(
            res['data'].message,
             'Rate Merchant'
           )
           this.dismissModal()
        },
        (error) => {
          if (error.status === 401 || 403 || 404 || 400 || 500)
            this.toastr.error(
             error.error['data'].message,
              'Rate Merchant'
            )
        }
      )
  }
}
