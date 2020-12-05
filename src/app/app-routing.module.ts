import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoverComponent } from './discover/discover.component';
import { InvestmentsComponent } from './investments/investments.component';
import { InvestorComponent } from './pages/investor/investor.component';
import { LoginComponent } from './pages/login/login.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PoolComponent } from './pool/pool.component';
import { ProfileComponent } from './profile/profile.component';
import { RatemerchantComponent } from './ratemerchant/ratemerchant.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'merchant', component: MerchantComponent},
  { path: 'investor', component: InvestorComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'investor/wallet', component: WalletComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'merchant/pool', component: PoolComponent},
  { path:'investor/investment', component: InvestmentsComponent },
  { path: 'discover', component:DiscoverComponent },
  { path: 'merchant/rate', component: RatemerchantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
