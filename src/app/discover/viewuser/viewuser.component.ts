import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input() merchants;

  constructor(
    private toastr: ToastrService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  dismissModal(){
    this.activeModal.dismiss()
  }

}
