// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
// External Modules
import {FlashMessagesModule} from 'angular2-flash-messages';
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

//Services
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';


//appRoutes - va a contener todas las routes del app
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
  {path:'adminDashboard',component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'adminUsers',component:AdminUsersComponent,canActivate:[AuthGuard]}

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
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
