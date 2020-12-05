import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input() merchants;
  formData: FormGroup

  constructor(
    private toastr: ToastrService,
    private activeModal: NgbActiveModal,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.formData = this.builder.group({
      amount: new FormControl('', [Validators.required]),
      maturityDate: new FormControl('', [Validators.required]),
      interestRate: new FormControl('', [Validators.required]),
    });

  }

  dismissModal(){
    this.activeModal.dismiss()
  }
  onSubmit(){
    
  }

}
