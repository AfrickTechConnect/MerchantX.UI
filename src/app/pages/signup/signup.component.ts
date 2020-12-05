import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading= false;
  formData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.formData =  this.builder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      proofAddress: new FormControl('', [Validators.required]),
      identificationUrl: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(){
    this.isLoading = true
    this.auth
      .signup(this.formData.value)
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe(
        (res) => {
          this.toastr.success(
            res['data'].message,
            'Create Account'
          )
          localStorage.setItem('USER', JSON.stringify(res['data']));
          this.router.navigate(['/investor']);
        },
        (error) => {
          if (error.status === 401 || 403 || 404 || 400 || 500)
            this.toastr.error(
             error.error['data'].message,
              'Create Account'
            )
        }
      )
  }
}
