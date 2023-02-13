import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NavigationComponent } from './pages/admin/navigation/navigation.component';
import { AddCiudadComponent } from './pages/admin/view/ciudad/add-ciudad/add-ciudad.component';
import { CiudadComponent } from './pages/admin/view/ciudad/ciudad/ciudad.component';
import { UpdateCiudadComponent } from './pages/admin/view/ciudad/update-ciudad/update-ciudad.component';
import { AddPaisComponent } from './pages/admin/view/pais/add-pais/add-pais.component';
import { PaisComponent } from './pages/admin/view/pais/pais/pais.component';
import { UpdatePaisComponent } from './pages/admin/view/pais/update-pais/update-pais.component';
import { AddRegionalComponent } from './pages/admin/view/regional/add-regional/add-regional.component';
import { RegionalComponent } from './pages/admin/view/regional/regional/regional.component';
import { UpdateRegionalComponent } from './pages/admin/view/regional/update-regional/update-regional.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },{
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },{
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },{
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },{
    path:'admin',
    component:NavigationComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'pais',
        component:PaisComponent
      },
      {
        path:'add-pais',
        component:AddPaisComponent
      },
      {
        path:'pais/:idpais',
        component:UpdatePaisComponent
      },
      {
        path:'ciudad',
        component:CiudadComponent
      },
      {
        path:'add-ciudad',
        component:AddCiudadComponent
      },
      {
        path:'ciudad/:idciudad',
        component:UpdateCiudadComponent
      },
      {
        path:'regional',
        component:RegionalComponent
      },
      {
        path:'add-regional',
        component:AddRegionalComponent
      },
      {
        path:'regional/:idregional',
        component:UpdateRegionalComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
