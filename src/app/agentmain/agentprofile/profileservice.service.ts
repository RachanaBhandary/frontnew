import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http:HttpClient) { }
   getProfiledetails() {
      return this.http.get('http://localhost:8088/agent');
  }
  deleteAgents(empid)
  {
  	console.log(empid);
  	return this.http.delete('http://localhost:8088/delete/agent/'+empid,empid);
  }
 UpdateAgents()
  {
  	return this.http.get('http://localhost:8088/agent');
  }
}
