import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class OrganiserguardGuard implements CanActivate {
  constructor(private auth:AuthenticateService, private router:Router){}
  canActivate():boolean
  {
    if(this.auth.orgLoggedIn())
    {
      return true;
    }
    else
    {
      alert("You do not have access to this page! Returning to home page.");
      this.router.navigate(["/home"]);
      return false;
    }
  }
  
}
