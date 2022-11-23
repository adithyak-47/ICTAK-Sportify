import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http:HttpClient) { }

  AuthenticateCaptain = (data:any) =>{
    return this.http.post<any>("http://localhost:3000/housecaptainlogin",data);
  }

  getCapToken = () =>{
    return localStorage.getItem('housecaptoken');
  }

  capLoggedIn = () =>{
    return !!localStorage.getItem('housecaptoken');
  }

  AuthenticateOrg =(data:any)=>{
    return this.http.post<any>("http://localhost:3000/adminlogin",data);
  }

  getOrgToken = () =>{
    return localStorage.getItem("orgtoken");
  }

  orgLoggedIn = () =>{
    return !!localStorage.getItem("orgtoken");
  }
  
  AuthenticateStudent = (data:any) =>{
    return this.http.post<any>("http://localhost:3000/studentlogin",data);
  }

  getStudentToken = () =>{
    return localStorage.getItem("studenttoken");
  }

  studentLoggedIn = () =>{
    return !!localStorage.getItem("studenttoken");
  }
}
