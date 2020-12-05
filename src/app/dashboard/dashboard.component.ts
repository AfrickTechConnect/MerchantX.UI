import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string = 'Dashboard'
  acr
  constructor() { }

  ngOnInit(){
    this.acr = localStorage.getItem('ACR');
  }

}
