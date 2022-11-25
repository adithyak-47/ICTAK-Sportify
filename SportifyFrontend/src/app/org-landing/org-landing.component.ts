import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-org-landing',
  templateUrl: './org-landing.component.html',
  styleUrls: ['./org-landing.component.css']
})
export class OrgLandingComponent implements OnInit {

  constructor(private api:ApiService) {
    api.ViewStudents().subscribe(
      (res)=>{
        this.data = res;
      }
    ) 
    api.viewEvents().subscribe((res)=>
  {
    this.events=res;
  })
    
  }
  addevents=()=>
  {
    if(this.event!=null)
    {
    let eventjson={
      "event":this.event
    }
    this.api.insertEvents(eventjson).subscribe((response)=>
    {
      console.log(response)
    }
    )
  location.reload()
      
  }
  
  }

  ngOnInit(): void {
    document.body.className = "selector";
  }
  ngOnDestroy():void
  {
    document.body.className = "";
  }
  events:any=[]
  data:any = []
  
  event:any
  house=["Red","Yellow","green","blue"]

}
