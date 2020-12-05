import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestorComponent } from './pages/investor/investor.component';
import { LoginComponent } from './pages/login/login.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'merchant', component: MerchantComponent},
  { path: 'investor', component: InvestorComponent},
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
