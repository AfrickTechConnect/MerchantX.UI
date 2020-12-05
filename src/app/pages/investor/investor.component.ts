import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { InvestorService } from 'src/app/investor.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {

  formData: FormGroup;
  isLoading = false
  user
  constructor(
    private builder: FormBuilder,
    private investor: InvestorService,
    private router: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('USER'))
    this.formData = this.builder.group({
      govtId: new FormControl('', [Validators.required]),
      investmentLimit: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    this.isLoading = true
    this.investor
      .addInvestor(this.formData.value, this.user['token'])
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe(
        (res) => {
          this.toastr.success(
            res['data'].message,
            'Investor Account'
          )
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          if (error.status === 401 || 403 || 404 || 400 || 500)
            this.toastr.error(
             error.error['data'].message,
              'Investor Account'
            )
        }
      )
  }

}
