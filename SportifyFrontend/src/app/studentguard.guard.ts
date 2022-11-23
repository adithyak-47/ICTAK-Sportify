import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class StudentguardGuard implements CanActivate {
  constructor(private auth:AuthenticateService, private router:Router){}
  canActivate():boolean
  {
    if(this.auth.studentLoggedIn())
    {
      return true;
    }
    else
    {
      alert("You do not have access! Returning to home page!");
      this.router.navigate(["/home"]);
      return false;
    }
  }
  
}
