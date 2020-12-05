import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewinvestment',
  templateUrl: './viewinvestment.component.html',
  styleUrls: ['./viewinvestment.component.css']
})
export class ViewinvestmentComponent implements OnInit {

  @Input() investment;
  constructor() { }

  ngOnInit(): void {
  }

}
