import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {

  name= "Merchant Fund Pool";
  acr
  totalFunding = 0
  creditScore = 0
  investments 
  settings = {
    attr: {
      class: 'text-2xl '
    },
    actions: {
      edit: false,
      delete: false,
      add: false,
      // custom: [
      //   {
      //     name: 'view',
      //     title:
      //       '<span class="bg-black rounded p-1 view-staff action text-white pr-2 pl-2 pt-1 pb-1 font-weight-bold">View</span>',
      //   },
      // ],
      position: 'right',
    },
    columns: {
      amount: {
        filter: false,
        editable: false,
        addable: false,
        title: 'Amount'
      },
      date: {
        filter: false,
        editable: false,
        addable: false,
        title: 'Maturity Date'
      },
      createdAt: {
        filter: false,
        editable: false,
        addable: false,
        title: 'Investment Date',
        valuePrepareFunction: (cell, data) => {
          const date = new Date(data.createdAt).toLocaleString()
          return date;
        },
      },
      interestRate: {
        filter: false,
        editable: false,
        addable: false,
        title: 'Interest Rate'
      },
      
    },
    pager: {
      perPage: 10,
    },
  };
  constructor(
    private merchantService: MerchantService
  ) { }

  ngOnInit() {
    this.acr = localStorage.getItem('ACR');
    const userDet = JSON.parse(localStorage.getItem('USERDET'));

    this.merchantService.fundpool(userDet['token']).subscribe(res => {
      this.totalFunding = res['data']['totalFunding']
      this.investments = res['data']['Investments']
      this.creditScore = res['data']['creditScore']
    })
  }

}
