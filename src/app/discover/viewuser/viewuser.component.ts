import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { InvestorService } from 'src/app/investor.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input() merchants;
  isLoading: boolean = false;
  formData: FormGroup
  user

  constructor(
    private toastr: ToastrService,
    private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private investorService: InvestorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('USER'))
    this.formData = this.builder.group({
      amount: new FormControl('', [Validators.required]),
      maturityDate: new FormControl('', [Validators.required]),
      interestRate: new FormControl('', [Validators.required]),
    });

  }

  dismissModal(){
    this.activeModal.dismiss()
  }
  onSubmit(){
    
    const data = this.formData.value;
    data.merchantId = this.merchants['id']
    this.isLoading = true
    this.investorService
      .invest(data, this.user['token'])
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe(
        (res) => {
          this.toastr.success(
            res['data'].message,
             'Investment'
           )
          this.dismissModal();
        },
        (error) => {
          if (error.status === 401 || 403 || 404 || 400 || 500)
            this.toastr.error(
             error.error['data'].message,
              'Investment'
            )
        }
      )
  }

}
