import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AupdateformService {

  constructor(private http:HttpClient) { }

  getCustomerDetails(){
return this.http.get('http://localhost:8088/agent');
  }
}
