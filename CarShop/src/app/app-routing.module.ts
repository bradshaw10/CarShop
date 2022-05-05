import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'cars', component: CarComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/cars', pathMatch: 'full' }
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
