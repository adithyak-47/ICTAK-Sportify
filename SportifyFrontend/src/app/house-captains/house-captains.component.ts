import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-house-captains',
  templateUrl: './house-captains.component.html',
  styleUrls: ['./house-captains.component.css']
})
export class HouseCaptainsComponent implements OnInit {

  
  constructor(private router:Router, private auth:AuthenticateService) {
   }

  ngOnInit(): void {
  
  }

  housename = "";
  user = "";
  password = "";
  HouseCapLogin = () =>{
    let data = {"user":this.user, "password":this.password, "house": this.housename};
    this.auth.AuthenticateCaptain(data).subscribe(
      (res)=>{
        localStorage.setItem('housecaptoken', res.token);
        this.router.navigate(['/houseCaptainLand']);
      }
    )
    
  }


}
