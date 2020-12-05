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
    
    return this.http.post(`${this.baseURL}api/v1/merchant/rate`, data, { headers: headers })
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
