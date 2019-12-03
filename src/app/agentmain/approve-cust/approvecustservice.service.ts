import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApprovecustserviceService {

  constructor(private http:HttpClient) {
  }
  getCustomerDetails(){
return this.http.get('http://localhost:8088/customer');
  }
  updateAction(agent,id)
  {
  	console.log(agent.action);
    return this.http.put('http://localhost:8088/put/customer/'+id,agent,id);
  }
}

