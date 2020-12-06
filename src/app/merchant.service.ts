import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private  baseURL = environment.apiURL

  constructor(
    private http: HttpClient
  ) { }

  addMerchant(data, token){
    console.log(token)
    let header = new HttpHeaders({ "Authorization": token});

    const requestOptions = {  headers: header};
    return this.http.post(`${this.baseURL}api/v1/merchant/create`, data, requestOptions)
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
  
  rateMerchant(data, token){
    const headers = new HttpHeaders({'Authorization': token });
    
    return this.http.patch(`${this.baseURL}api/v1/merchant/rate`, data, { headers: headers })
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

  getMerchants(){  
    return this.http.get(`${this.baseURL}api/v1/merchant/all`,)
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

  count(){
    return this.http.get(`${this.baseURL}api/v1/merchant/`)
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

  fundpool(token){
    const headers = new HttpHeaders({'Authorization': token });
    return this.http.get(`${this.baseURL}api/v1/merchant/fundpool`,  { headers: headers })
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
