import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacilityloginComponent } from './facilitylogin/facilitylogin.component';
import { FacilityRegisterComponent } from './facility-register/facility-register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { ProposalComponent } from './proposal/proposal.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './safe.pipe';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminListusersComponent } from './admin-listusers/admin-listusers.component';
import { AdminTransactionsComponent } from './admin-transactions/admin-transactions.component';
import { AdminListfacilityComponent } from './admin-listfacility/admin-listfacility.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    FacilityloginComponent,
    FacilityRegisterComponent,
    UserDashboardComponent,
    CompanyDashboardComponent,
    ProposalComponent,
    UserRequestsComponent,
    FooterComponent,
    SafePipe,
    TransactionsComponent,
    AdminLoginComponent,
    AdminListusersComponent,
    AdminTransactionsComponent,
    AdminListfacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
