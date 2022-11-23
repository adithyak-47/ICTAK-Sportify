import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticateService, private router:Router){}
  canActivate():boolean{
    if(this.auth.capLoggedIn())
    {
      return true;
    }
    else
    {
      alert("You do not have access!! Going to the home page.")
      this.router.navigate(["/home"]);
      return false;
    }
  }
  
}
