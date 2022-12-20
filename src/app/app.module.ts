import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signin/signin.component';
import { TaskboardComponent } from './component/taskboard/taskboard.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskboardComponent,
    LoginComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
