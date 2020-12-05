import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewinvestmentComponent } from './viewinvestment/viewinvestment.component';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  name="Investments";
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
      perPage: 20,
    },
  };
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(){
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
