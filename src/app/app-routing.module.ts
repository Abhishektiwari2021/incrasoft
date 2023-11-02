import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PatientComponent } from './patient/patient.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'marketing', pathMatch: 'full' },
  { path: 'marketing', component: MarketingComponent },

  { path: 'patient', component: PatientComponent },
  //   {path: 'navbar', component: NavbarComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
