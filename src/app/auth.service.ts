import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  baseURL = environment.apiURL


  constructor(
    private http: HttpClient
  ) { }

  signup(data){
    return this.http.post(`${this.baseURL}api/v1/users/signup`, data)
          .pipe(
            map(
              (res) =>{ 
                return res
              },
              (error) => {
                return error
              }
            )              
    )
  }

  login(data) {
    return this.http.post(`${this.baseURL}api/v1/users/signin`, data)
    .pipe(
      map(
        (res) =>{ 
          return res
        },
        (error) => {
          return error
        }
      )              
    )
  }

  getUserDetails(token){

    const headers = new HttpHeaders({'Authorization': token });

    return this.http.get(`${this.baseURL}api/v1/users/details`, { headers: headers })
    .pipe(
      map(
        (res) =>{ 
          return res
        },
        (error) => {
          return error
        }
      )              
    )
  }
}
