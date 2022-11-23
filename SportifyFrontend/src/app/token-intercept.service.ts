import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthenticateService} from "./authenticate.service"

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any,next:any)
  {
    let authenticate = this.injector.get(AuthenticateService);
    let newtoken = req.clone(
      {
        setHeaders:{
          Authorization: `Bearer ${authenticate.getCapToken()}`
        }
      }
    )
    return next.handle(newtoken);
  }
}
