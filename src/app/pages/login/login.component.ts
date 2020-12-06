import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  formData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formData = this.builder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    this.isLoading = true
    this.auth
      .login(this.formData.value)
      .pipe(
        finalize(() => {
          this.isLoading = false
        })
      )
      .subscribe(
        (res) => {
          localStorage.setItem('token', 'aaa')
          this.toastr.success(
            res['data'].message,
            'Login'
          )
          localStorage.setItem('USER', JSON.stringify(res['data']));
          this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/dashboard']);
          })
          
        },
        (error) => {
          if (error.status === 401 || 403 || 404 || 400 || 500)
            this.toastr.error(
             error.error['data'].message,
              'Login'
            )
        }
      )
  }
}

