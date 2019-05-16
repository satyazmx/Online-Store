import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule, RouterEvent } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';

const routes : Routes =[
  { path:'', redirectTo:'/aboutus', pathMatch:'full'},
  { path:'aboutus' , component: AboutusComponent},
  { path:'**', redirectTo:'/aboutus', pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
