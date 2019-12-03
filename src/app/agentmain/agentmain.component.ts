import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankserviceService } from './bankservice.service';
@Component({
  selector: 'app-agentmain',
  templateUrl: './agentmain.component.html',
  styleUrls: ['./agentmain.component.css']
})
export class AgentmainComponent implements OnInit {

 getData:any[];

  constructor(private router: Router,private _httpService: BankserviceService) { }


  ngOnInit() {
  }
 viewcust()
   {


     this._httpService.getCustomerDetails().subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  
     });
          this.router.navigate(['viewcustomer']);
   }
   viewtrans()
   {
      


 this._httpService.getTransactiondetails().subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  
     });

   	this.router.navigate(['viewtransaction']);
   }
   approvecust()
   {
      this._httpService.getCustomerDetails().subscribe((res:any[])=>{
       console.log(res);
       this.getData=res; });
   	   	this.router.navigate(['approve-cust']);

   }
   main1()
   {
   	   	this.router.navigate(['agentmain']);

   }
   Profile1(){
     this._httpService.getProfiledetails().subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  
     });

   	   	   	this.router.navigate(['agentprofile']);

   }
}

