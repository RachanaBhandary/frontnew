import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AupdateformService } from './aupdateform';
@Component({
  selector: 'app-aupdateform',
  templateUrl: './aupdateform.component.html',
  styleUrls: ['./aupdateform.component.css']
})
export class AupdateformComponent implements OnInit {
getData:any[];
  constructor(private _httpService: AupdateformService) { }

   ngOnInit() {



     this._httpService.getCustomerDetails().subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  })

}
}