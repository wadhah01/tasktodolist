import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signin/signin.component';
import { TaskboardComponent } from './component/taskboard/taskboard.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  },
  {
   path: 'login', component: LoginComponent 
  },
 {
   path: 'signup', component: SignupComponent 
 }, 
 {
   path:'task' , component: TaskboardComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
