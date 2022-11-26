import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    document.body.className = "selector";
  }
  ngOnDestroy():void
  {
    document.body.className = "";
  }
  user = "";
  pass = "";
  house = "";

  registerStudent = () =>{
    let data = {"name":this.user,"house":this.house,"pass":this.pass};
    this.api.registerStudents(data).subscribe(
      (res)=>{
        console.log(res);
      }
    )
    this.router.navigate(["/participant"]);
  }

}
