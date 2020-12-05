import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewmerchantComponent } from './viewmerchant/viewmerchant.component';

@Component({
  selector: 'app-ratemerchant',
  templateUrl: './ratemerchant.component.html',
  styleUrls: ['./ratemerchant.component.css']
})
export class RatemerchantComponent implements OnInit {

  name: string = 'Rate Merchant'
  merchants =[
    {
      cac: "https://www.google.com",
      attachmentforPitch: "https://www.yahoo.com",
      name: "Akan Bassey"
    },
    {
      cac: "https://www.google.com",
      attachmentforPitch: "https://www.yahoo.com",
      name: "Koorede Bassey"
    },
    {
      cac: "https://www.google.com",
      attachmentforPitch: "https://www.yahoo.com",
      name: "Emeka Bassey"
    },

  ]
  settings = {
    attr: {
      class: 'text-2xl '
    },
    actions: {
      edit: false,
      delete: false,
      add: false,
      custom: [
        {
          name: 'view',
          title:
            '<span class="bg-black rounded p-1 view-staff action text-white pr-2 pl-2 pt-1 pb-1 font-weight-bold">Rate</span>',
        },
      ],
      position: 'right',
    },
    columns: {
      cac: {
        filter: false,
        editable: false,
        addable: false,
        title: 'CAC Document',
        type: 'html',
        valuePrepareFunction: (cell, data) => {
          return `<a href='${data.cac}' target='_blank'>CAC for ${data.name}</a>`
        },
      },
      attachmentforPitch: {
        filter: false,
        editable: false,
        addable: false,
        title: 'Attachment For Pitch',
        type: 'html',
        valuePrepareFunction: (cell, data) => {
          return `<a href='${data.attachmentforPitch}' target='_blank'>Business pitch for ${data.name}</a>`
        },
      },
    },
    pager: {
      perPage: 20,
    },
  };
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal(data){
    const modalRef = this.modalService.open(ViewmerchantComponent, { size: 'lg'})

    modalRef.componentInstance.merchant = data;
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
