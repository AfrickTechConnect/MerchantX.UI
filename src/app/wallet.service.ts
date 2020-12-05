import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  baseURL = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  fundWallet(data, token){
    const headers = new HttpHeaders({'Authorization': token });
    return this.http.post(`${this.baseURL}api/v1/investor/fund/wallet`, data, { headers: headers })
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
