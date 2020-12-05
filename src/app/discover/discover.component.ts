import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewuserComponent } from './viewuser/viewuser.component';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  name = "Discover"
  acr
  merchants =[
    {
      cac: "https://www.google.com",
      attachmentforPitch: "https://www.yahoo.com",
      name: "Akan Bassey"
    },
    {
      cac: "https://www.google.com",
      attachmentforPitch: "https://www.yahoo.com",
      name: "Korede Bassey"
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
            '<span class="bg-black rounded p-1 view-staff action text-white pr-2 pl-2 pt-1 pb-1 font-weight-bold">Invest</span>',
        },
      ],
      position: 'right',
    },
    columns: {
      name: {
        filter: true,
        editable: false,
        addable: false,
        title: 'Merchant Name',
      },
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

  ngOnInit() {
    this.acr = localStorage.getItem('ACR');
  }

  openModal(data){
    const modalRef = this.modalService.open(ViewuserComponent, {size: 'lg'});

    modalRef.componentInstance.merchants = data;
  }

  onCustom(event){
    switch (event.action) {
      case 'view':
        this.openModal(event.data)
        break
      default:
        break
    }
  }

}
