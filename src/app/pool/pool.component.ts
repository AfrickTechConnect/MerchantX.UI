import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {

  name= "Merchant Fund Pool";
  investments =[
    {
      amount: "$500",
      maturityDate: "10/20/2020",
      investmentDate: '10/20/2018',
      interestRate: '20%'
    },
    {
      amount: "$500",
      maturityDate: "10/20/2020",
      investmentDate: '10/20/2018',
      interestRate: '20%'
    },
    {
      amount: "$500",
      maturityDate: "10/20/2020",
      investmentDate: '10/20/2018',
      interestRate: '20%'
    },
    {
      amount: "$500",
      maturityDate: "10/20/2020",
      investmentDate: '10/20/2018',
      interestRate: '20%'
    }
  ]
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
      maturityDate: {
        filter: false,
        editable: false,
        addable: false,
        title: 'Maturity Date'
      },
      investmentDate: {
        filter: false,
        editable: false,
        addable: false,
        title: 'Investment Date'
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
  constructor() { }

  ngOnInit(): void {
  }

}
