import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './settings/settings.component';

const routes : Routes =[
  
  { path:'', component: AboutusComponent},
  { path:'header', component: HeaderComponent},
  { path:'settings', component: SettingsComponent},
  { path:'aboutus', component: AboutusComponent},
  
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
