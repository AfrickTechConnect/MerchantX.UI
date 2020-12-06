import { Component, OnInit } from '@angular/core';
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
  investorCount
  merchantCount
  totalInvestments
  balance
  poolBalance
  creditScore
  constructor(
    private investorService: InvestorService,
    private merchantService: MerchantService
  ) { }

  ngOnInit(){
    this.acr = localStorage.getItem('ACR');
    const role = localStorage.getItem('ROLE');
    const userDet = JSON.parse(localStorage.getItem('USERDET'))
    this.isAdmin = userDet['type'] === 'admin';
    this.isMerchant = role === 'Merchant';
    this.isInvestor = role === 'Investor';

    this.investorService.count().subscribe(res => {
      this.investorCount = res['data']['investors']
    })

    console.log(role)

    this.merchantService.count().subscribe(res => {
      this.merchantCount = res['data']['merchant']
    })

    this.investorService.investorMetrics(userDet['token']).subscribe(res => {
      this.balance = res['data']['balance']
      this.totalInvestments = res['data']['investment']
    })
    this.merchantService.fundpool(userDet['token']).subscribe(res => {
      this.poolBalance = res['data']['totalFunding']
      this.creditScore = res['data']['creditScore']
    })
  }

}
