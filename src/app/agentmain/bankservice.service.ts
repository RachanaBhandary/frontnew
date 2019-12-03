import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

  constructor(private http:HttpClient) { }
   getCustomerDetails(){
return this.http.get('http://localhost:8088/customer');
  }
  getTransactiondetails(){
  	return this.http.get('http://localhost:8088/transaction');
  }
  getProfiledetails() {
      return this.http.get('http://localhost:8088/agent');
  }
}
