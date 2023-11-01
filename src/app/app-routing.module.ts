import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
//   {path: '', redirectTo: 'side', pathMatch:'full'},
//   {path: 'navbar', component: NavbarComponent},
//   {path: '**', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
