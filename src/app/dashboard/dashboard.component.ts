import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { InvestorService } from '../investor.service';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string = 'Dashboard'
  acr
  isAdmin
  isMerchant
  isInvestor
  investorCount = 0
  merchantCount = 0
  totalInvestments
  balance = 0
  poolBalance = 0
  creditScore = 0
  userDet
  role
  isLoading = false
  userDetails
  constructor(
    private investorService: InvestorService,
    private merchantService: MerchantService,
    private router: Router,
    private auth: AuthService
  ) { }

  
  ngOnInit(){
    this.acr = localStorage.getItem('ACR');
    // this.role = localStorage.getItem('ROLE');
    this.userDet = JSON.parse(localStorage.getItem('USER'))
    // this.isAdmin = this.userDet['type'] === 'admin';
    // this.isMerchant = this.role === 'Merchant';
    // this.isInvestor = this.role === 'Investor';
    this.getRole()
    this.getData();
    
  }

  getRole(){
    console.log(this.userDet)
    this.auth.getUserDetails(this.userDet['token']).subscribe(
      res => {
        this.userDetails = res['data']
        localStorage.setItem('USERDET', JSON.stringify(res['data']))
        this.isAdmin = this.userDetails.type == 'admin'
        if(this.userDetails['Merchant'] === null  && this.userDetails['Investor'] === null){
          this.role = 'not-registered'
          localStorage.setItem('ROLE', 'unregistered')
        }
        else if(this.userDetails['Merchant'] !== null && this.userDetails['Investor'] === null ){
          this.role = 'Merchant'
          this.isMerchant = true
          localStorage.setItem('ROLE', 'Merchant')
        } else if(this.userDetails['Merchant'] === null  && this.userDetails['Investor'] !== null){
          this.role = 'Investor'
          this.isInvestor = true
          localStorage.setItem('ROLE', 'Investor')
        } 
        const acronym = `${this.userDetails['firstname'][0]}${this.userDetails['lastname'][0]}`
        localStorage.setItem('ACR', acronym)

      }
    )
  }

  getData(){
    this.investorService.count().subscribe(res => {
      this.investorCount = res['data']['investors']
    })


    // this.merchantService.count().subscribe(res => {
    //   this.merchantCount = res['data']['merchant']
    // })

    this.investorService.investorMetrics(this.userDet['token']).subscribe(res => {
      this.balance = res['data']['balance']
      this.totalInvestments = res['data']['investment']
    })
    // this.merchantService.fundpool(this.userDet['token']).subscribe(res => {
    //   this.poolBalance = res['data']['totalFunding']
    //   this.creditScore = res['data']['creditScore']
    // })
    this.isLoading = true
  }
}
