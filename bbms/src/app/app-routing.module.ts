import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminCampComponent } from './admin-camp/admin-camp.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminDonorlistComponent } from './admin-donorlist/admin-donorlist.component';
import { AdminHomeMainComponent } from './admin-home-main/admin-home-main.component';
import { AdminHospitalListComponent } from './admin-hospital-list/admin-hospital-list.component';
import { AdminHospitalRequestComponent } from './admin-hospital-request/admin-hospital-request.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminStockComponent } from './admin-stock/admin-stock.component';

import { ContactComponent } from './contact/contact.component';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { HomemainComponent } from './homemain/homemain.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { RequestComponent } from './request/request.component';
import { StatusComponent } from './status/status.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'',component:HomemainComponent,
  children:
  [
  {path:'', redirectTo:'//home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'donor-register',component:DonorRegisterComponent},
  {path:'hospital-register',component:HospitalRegisterComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'status',component:StatusComponent},
  {path:'request',component:RequestComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'knowmore',component:KnowmoreComponent},
  ]
  
  },
  
  {path:'admin-login',component:AdminLoginComponent}, 
  {path:'admin',component:AdminHomeMainComponent,
  children:
  [
    {path:'', redirectTo:'/admin/admin-dash',pathMatch:'full'},
    {path:'admin-dash',component:AdminDashComponent},
    {path:'admin-camp',component:AdminCampComponent},
    {path:'admin-hospital-list',component:AdminHospitalListComponent},
    {path:'admin-donorlist',component:AdminDonorlistComponent},
    {path:'admin-contact',component:AdminContactComponent},
    {path:'admin-hospital-request',component:AdminHospitalRequestComponent},
    {path:'admin-stock',component:AdminStockComponent},
    


  ]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
