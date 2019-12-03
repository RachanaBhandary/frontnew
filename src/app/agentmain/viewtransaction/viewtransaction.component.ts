import { Component, OnInit } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent implements OnInit {
	columnDefs = [
  {headerName: 'Account Number', field: 'trans_acc_no', sortable: true, filter: true },
   {headerName: 'Credit', field: 'trans_credit', sortable: true, filter: true },
    {headerName: 'Date', field: 'trans_date', sortable: true, filter: true},
    {headerName: 'Debit', field: 'trans_debit', sortable: true, filter: true },
        {headerName: 'Transaction Id', field: 'trans_id', sortable: true, filter: true },
        
       
       
        
        
        
    ];

   rowData:any;

    modules = AllCommunityModules;

 constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {

  	this.rowData = this.http.get('http://localhost:8082/transaction');
  }
  main1()
  {
  	   	   	this.router.navigate(['agentmain']);

  }

}



