// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { enableProdMode } from '@angular/core';

// External Modules
import {FlashMessagesModule} from 'angular2-flash-messages';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload';

//External Js File 
import * as Raven from 'raven-js';

// My own modules
import { CustomErrorHandler } from './CustomErrorHandler';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListGroupComponent } from './components/dashboard-components/listgroup/listgroup.component';
import { IconComponent } from './components/icon/icon.component';
import { SidebarComponent } from './components/dashboard-components/sidebar/sidebar.component';
import { ProgressbarComponent } from './components/dashboard-components/progressbar/progressbar.component';
import { BoxComponent } from './components/dashboard-components/box/box.component';
import { BoxesComponent } from './components/dashboard-components/boxes/boxes.component';
import { TableComponent } from './components/dashboard-components/table/table.component';
import { ModalComponent } from './components/dashboard-components/modal/modal.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { UploadPortfolioComponent } from './components/upload-portfolio/upload-portfolio.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DisplayProfessorsComponent } from './components/display-professors/display-professors.component';
import { UserTimelineComponent } from './components/user-timeline/user-timeline.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DownloadProfessorFilesComponent } from './components/download-professor-files/download-professor-files.component';
import { PayComponent } from './components/pay/pay.component';
import { NotFoundPathComponent } from './components/not-found-path/not-found-path.component';



//Services
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {AdministratorGuard} from './guards/administrtor.guard';
import {UsersService} from './services/users.service';
import {UtilitiesService} from './services/utilities.service';
import {AdministratorsService} from './services/administration/administrator.service';
import {OrganizationsService} from './services/organization/organization.service';
import {PaypalService} from './services/paypal.service';
import { environment } from 'environments/environment';


Raven
.config('https://8437f0ecddb64e0b9af3912881bec74f@sentry.io/203113')
.install();

//appRoutes - va a contener todas las routes del angular app
const appRoutes: Routes = [
  // Home Route
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  // protect route
  {path:'profile',component:ProfileComponent}, // ,canActivate:[AuthGuard]
  // protect route
  {path:'dashboard',component:DashboardComponent},//,canActivate:[AuthGuard]
  // protect route
  {path:'adminDashboard',component:AdminDashboardComponent,canActivate:[AdministratorGuard]},
  {path:'adminUsers',component:AdminUsersComponent, canActivate:[AdministratorGuard]},
  // I will want this route to be protected only another administrator can create other
  // administrator
  {path:'register/admin',component:AdminRegisterComponent},
  // administrator upload templates - ponerle protected route
  {path:'admin/upload',component:UploadFileComponent},
  {path:'admin/professors',component:DisplayProfessorsComponent},
  {path:'admin/DownloadProfessorsFiles/:escuela',component:DownloadProfessorFilesComponent},
  // user upload portfolios - ponerle protected route
  {path:'users/upload',component:UploadPortfolioComponent},
  {path:'timeline',component:UserTimelineComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'pay',component:PayComponent},
  //This route need to be at the end if none of this route match send to this route
  {path:'**',component:NotFoundPathComponent}
  // {path:'succes',component:PayComponent}



];
// enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AdminDashboardComponent,
    ListGroupComponent,
    IconComponent,
    SidebarComponent,
    ProgressbarComponent,
    BoxComponent,
    BoxesComponent,
    TableComponent,
    ModalComponent,
    AdminUsersComponent,
    AdminRegisterComponent,
    UploadFileComponent,
    FileSelectDirective,
    UploadPortfolioComponent,
    DisplayProfessorsComponent,
    UserTimelineComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DownloadProfessorFilesComponent,
    PayComponent,
    NotFoundPathComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    NgbModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, AdministratorGuard,
    UsersService, UtilitiesService, AdministratorsService, OrganizationsService, PaypalService, { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
