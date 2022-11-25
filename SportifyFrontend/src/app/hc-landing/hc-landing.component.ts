import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { ApiService } from '../api.service';
import { AuthenticateService } from '../authenticate.service';
import jwtDecode, {JwtPayload} from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hc-landing',
  templateUrl: './hc-landing.component.html',
  styleUrls: ['./hc-landing.component.css']
})
export class HcLandingComponent implements OnInit {

  constructor(private api:ApiService, private auth: AuthenticateService, private router:Router) { 
    this.housetoken = this.auth.getCapToken();
    if(this.housetoken!==null)
    {
      this.tokeninfo = jwtDecode<JwtPayload>(this.housetoken);
      this.housename = this.tokeninfo.house;
      api.ViewStudentsByHouse(this.housename).subscribe(
        (res)=>{
          this.data = res;
        }
      )
    }
  }

  ngOnInit(): void {
    document.body.className = "selector";
  }
  ngOnDestroy():void
  {
    document.body.className = "";
  }
  data:any = [];
  tokeninfo:any;
  housetoken:any;
  housename:any;
  
  DeleteEvent = (_id:any,event:any) =>{

    let id = _id;
    let body = {"_id":id, "event":event};
    this.api.DeleteStudentEvent(body).subscribe(
      (res)=>{
        console.log(res);
        alert("Data updated successfully!");
        location.reload();
      }
    )
  }
 
}