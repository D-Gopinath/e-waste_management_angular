import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { FacilityRegisterComponent } from './facility-register/facility-register.component';
import { FacilityloginComponent } from './facilitylogin/facilitylogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProposalComponent } from './proposal/proposal.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'user/dashboard',component:UserDashboardComponent},
  {path:'facility/register',component:FacilityRegisterComponent},
  {path:'facility/login',component:FacilityloginComponent},
  {path:'facility/dashboard',component:CompanyDashboardComponent},
  {path:'user/proposal/:uid/:fid',component:ProposalComponent},
  {path:'user/requests',component:UserRequestsComponent},
  {path:'user/transactions',component:TransactionsComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
