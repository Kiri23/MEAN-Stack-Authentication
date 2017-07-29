// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
// External Modules
import {FlashMessagesModule} from 'angular2-flash-messages';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload';

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
import { TableColumnsComponent } from './components/dashboard-components/table-columns/table-columns.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { UploadPortfolioComponent } from './components/upload-portfolio/upload-portfolio.component';


//Services
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {AdministratorGuard} from './guards/administrtor.guard';
import {UsersService} from './services/users.service';
import {UtilitiesService} from './services/utilities.service';
import {AdministratorsService} from './services/administration/administrator.service';
import {OrganizationsService} from './services/organization/organization.service';
import { UploadFileComponent } from './components/upload-file/upload-file.component';




//appRoutes - va a contener todas las routes del angular app
const appRoutes: Routes = [
  // Home Route
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  // protect route
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  // protect route
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  // protect route
  {path:'adminDashboard',component:AdminDashboardComponent,canActivate:[AdministratorGuard]},
  {path:'adminUsers',component:AdminUsersComponent,canActivate:[AuthGuard]},
  // I will want this route to be protected only another administrator can create other
  // administrator
  {path:'register/admin',component:AdminRegisterComponent},
  // administrator upload templates - ponerle protected route
  {path:'admin/upload',component:UploadFileComponent},
  // user upload portfolios - ponerle protected route
  {path:'users/upload',component:UploadPortfolioComponent}


];

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
    TableColumnsComponent,
    AdminRegisterComponent,
    UploadFileComponent,
    FileSelectDirective,
    UploadPortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    NgbModule.forRoot()
  ],
  providers: [ValidateService,AuthService,AuthGuard,AdministratorGuard,
    UsersService,UtilitiesService,AdministratorsService,OrganizationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
