import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  baseURL = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  addInvestor(data, token){
    const headers = new HttpHeaders({'Authorization': token });
    return this.http.post(`${this.baseURL}api/v1/investor/create`, data, { headers: headers })
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

  invest(data, token){
    const headers = new HttpHeaders({'Authorization': token });
    return this.http.post(`${this.baseURL}api/v1/investor/invest`, data, { headers: headers })
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
   
  

  investments( token){
    const headers = new HttpHeaders({'Authorization': token });
    return this.http.get(`${this.baseURL}api/v1/investor/investments`, { headers: headers })
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
    return this.http.get(`${this.baseURL}api/v1/investor`)
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

  investorMetrics(token){
    const headers = new HttpHeaders({'Authorization': token });
    return this.http.get(`${this.baseURL}api/v1/investor/metrics`, { headers: headers })
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
