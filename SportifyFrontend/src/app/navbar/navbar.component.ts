import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {AuthenticateService} from "../authenticate.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthenticateService, private router:Router) { }

  ngOnInit(): void {
  }

  logout = () =>{
    localStorage.clear();
    this.router.navigate(["/home"]);

  }

}
