import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticateService} from "../authenticate.service"

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  constructor(private auth:AuthenticateService, private router:Router) {

   }

  ngOnInit(): void {
  }
  name = "";
  pass = "";
  house = "";

  StudentLogin = () =>{
    let data = {"name":this.name, "house":this.house, "pass":this.pass};
    this.auth.AuthenticateStudent(data).subscribe(
      (res)=>{
        localStorage.setItem("studenttoken",res.token);
        this.router.navigate(["/stuLand"]);
      }
    )
  }

}
