import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FirstHomePageComponent } from './first-home-page/first-home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


const routes: Routes = [
  { 
    path: '', 
    component: FirstHomePageComponent
  },
  
  { 
    path: 'contacts', 
    component: ContactComponent
  },
  
  { 
    path:'registration', 
    component: RegistrationPageComponent 
  },
  
  {
    path:"aboutus",
    component: AboutUsComponent
  },
  
  {
    path:"login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ FirstHomePageComponent, RegistrationPageComponent]

export { Routes };