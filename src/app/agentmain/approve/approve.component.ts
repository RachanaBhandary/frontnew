import { Component, OnInit } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

   constructor(private router: Router) { }

  ngOnInit() {

  	// 
  }
  main1()
  {
  	   	   	this.router.navigate(['agentmain']);

  }
}
  
