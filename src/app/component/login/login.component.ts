import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  constructor(private formbuilder: UntypedFormBuilder, private _http:HttpClient, private _router:Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  logIn() {
    //console.log(this.loginForm.value);
    this._http.get<any>('http://localhost:3000/signup').subscribe(
      (res) => {
        const user= res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        });
         if (user) {
          alert(user.name + ' logged in successfully');
          this._router.navigate(['/taskboard']);
         } else {
          alert("Invalid credentials");
         }
        }, err=>{
          console.log(err);
        })
      }
    
  }


