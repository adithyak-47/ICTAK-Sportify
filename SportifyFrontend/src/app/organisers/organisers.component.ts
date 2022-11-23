import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-organisers',
  templateUrl: './organisers.component.html',
  styleUrls: ['./organisers.component.css']
})
export class OrganisersComponent implements OnInit {

  constructor(private auth:AuthenticateService, private router:Router) { }

  username = "";
  password = "";

  AuthenticateOrg =() =>{
    let data = {"user":this.username, "password":this.password};
    this.auth.AuthenticateOrg(data).subscribe(
      (res)=>{
        localStorage.setItem("orgtoken",res.token);
        this.router.navigate(["/orgLand"]);
      }
    )
  }

  ngOnInit(): void {
  }

}
