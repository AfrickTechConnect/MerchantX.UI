import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userDetails
  loggedUser
  role
  isMerchant: boolean = localStorage.getItem('Role') === 'Merchant';
  isAdmin
  isInvestor: boolean = localStorage.getItem('Role') === 'Investor'
  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.loggedUser = JSON.parse(localStorage.getItem('USER'))
    this.auth.getUserDetails(this.loggedUser['token']).subscribe(
      res => {
        this.userDetails = res['data']
        localStorage.setItem('USERDET', JSON.stringify(res['data']))
        this.isAdmin = this.userDetails.type == 'admin'
        if(this.userDetails['Merchant'] === null  && this.userDetails['Investor'] === null){
          this.role = 'not-registered'
          localStorage.setItem('ROLE', 'unregistered')
        }
        else if(this.userDetails['Merchant'] !== null && this.userDetails['Investor'] === null ){
          this.role = 'Merchant'
          this.isMerchant = true
          localStorage.setItem('ROLE', 'Merchant')
        } else if(this.userDetails['Merchant'] === null  && this.userDetails['Investor'] !== null){
          this.role = 'Investor'
          this.isInvestor = true
          localStorage.setItem('ROLE', 'Investor')
        } 
        const acronym = `${this.userDetails['firstname'][0]}${this.userDetails['lastname'][0]}`
        localStorage.setItem('ACR', acronym)

        console.log()
      }
    )

    
   
    
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }


}
