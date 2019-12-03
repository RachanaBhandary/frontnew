import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from './profileservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agentprofile',
  templateUrl: './agentprofile.component.html',
  styleUrls: ['./agentprofile.component.css']
})
export class AgentprofileComponent implements OnInit {
 getData:any;
  constructor(private router: Router,private _httpService:ProfileserviceService) {
   this._httpService.getProfiledetails().subscribe((res:any[])=>{
     console.log(res);
       this.getData=res;
  
     }); 

 }

  ngOnInit() {

  }
  deleteagent()
  {
    for (let prop1 of this.getData) {

   this._httpService.deleteAgents(prop1.empid).subscribe(data=>console.log(data),error=>console.log(error));   
              
      /* this.router.navigate(['login']);*/

  }}
 Updated()
 {

    for (let prop1 of this.getData) {

   this._httpService.UpdateAgents().subscribe(data=>console.log(data),error=>console.log(error));   
              
 }

this.router.navigate(['aupdateform']);   

  }
}


  

