import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvestorService } from '../investor.service';
import { ViewinvestmentComponent } from './viewinvestment/viewinvestment.component';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  name="Investments";
  acr
  user
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
      perPage: 20,
    },
  };
  constructor(
    private modalService: NgbModal,
    private investorService: InvestorService
  ) { }

  ngOnInit(){
    this.acr = localStorage.getItem('ACR');
    this.user = JSON.parse(localStorage.getItem('USER'));

    this.investorService.investments(this.user['token']).subscribe(res => {
      console.log(res['data'])
      this.investments = res['data']['Investments']
    })
  }

  openModal(data){
    const modalRef = this.modalService.open(ViewinvestmentComponent, { size: 'lg'})

    modalRef.componentInstance.investment = data;
  }

  onCustom(event) {
    switch (event.action) {
      case 'view':
        this.openModal(event.data)
        break
      default:
        break
    }
  }
}
