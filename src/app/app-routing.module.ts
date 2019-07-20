import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './home/layout/layout.component';
import { AccountModule } from './account/account.module';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: 
    [{path: '',loadChildren: './home/home.module#HomeModule'}]}, 

    // {
    //   path: 'login',
    //   component: AccountModule,
    //   children: 
    //   [{path: '',loadChildren: './account/account.module#AccountModule'}]}, 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
