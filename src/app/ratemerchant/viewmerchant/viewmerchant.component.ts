import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewmerchant',
  templateUrl: './viewmerchant.component.html',
  styleUrls: ['./viewmerchant.component.css']
})
export class ViewmerchantComponent implements OnInit {


  @Input() merchant;
  constructor(
    private toastr: ToastrService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {

  }

  dismissModal(){
    this.activeModal.close();
    console.log(this.merchant);
  }

}
