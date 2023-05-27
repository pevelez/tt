import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {VideoComponent} from './video/video.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'',
    //component: VideoComponent,
    redirectTo: '/video',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
