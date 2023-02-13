import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PaisComponent } from './pages/admin/view/pais/pais/pais.component';
import { AddPaisComponent } from './pages/admin/view/pais/add-pais/add-pais.component';
import { NavigationComponent } from './pages/admin/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { UpdatePaisComponent } from './pages/admin/view/pais/update-pais/update-pais.component';
import { AddCiudadComponent } from './pages/admin/view/ciudad/add-ciudad/add-ciudad.component';
import { UpdateCiudadComponent } from './pages/admin/view/ciudad/update-ciudad/update-ciudad.component';
import { CiudadComponent } from './pages/admin/view/ciudad/ciudad/ciudad.component';
import { AddRegionalComponent } from './pages/admin/view/regional/add-regional/add-regional.component';
import { UpdateRegionalComponent } from './pages/admin/view/regional/update-regional/update-regional.component';
import { RegionalComponent } from './pages/admin/view/regional/regional/regional.component';
import { ClubComponent } from './pages/admin/view/club/club/club.component';
import { AddClubComponent } from './pages/admin/view/club/add-club/add-club.component';
import { UpdateClubComponent } from './pages/admin/view/club/update-club/update-club.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    WelcomeComponent,
    ProfileComponent,
    PaisComponent,
    AddPaisComponent,
    NavigationComponent,
    DashboardComponent,
    UpdatePaisComponent,
    AddCiudadComponent,
    UpdateCiudadComponent,
    CiudadComponent,
    AddRegionalComponent,
    UpdateRegionalComponent,
    RegionalComponent,
    ClubComponent,
    AddClubComponent,
    UpdateClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
