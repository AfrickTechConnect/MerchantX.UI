import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { InvestorComponent } from './pages/investor/investor.component'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InvestmentsComponent } from './investments/investments.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { PoolComponent } from './pool/pool.component';
import { DiscoverComponent } from './discover/discover.component';
import { RatemerchantComponent } from './ratemerchant/ratemerchant.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ViewinvestmentComponent } from './investments/viewinvestment/viewinvestment.component';
import { ViewuserComponent } from './discover/viewuser/viewuser.component';
import { ViewmerchantComponent } from './ratemerchant/viewmerchant/viewmerchant.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MerchantComponent,
    InvestorComponent,
    DashboardComponent,
    SidebarComponent,
    InvestmentsComponent,
    WalletComponent,
    ProfileComponent,
    PoolComponent,
    DiscoverComponent,
    RatemerchantComponent,
    ViewinvestmentComponent,
    ViewuserComponent,
    ViewmerchantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    Ng2SmartTableModule,
    NgbModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
