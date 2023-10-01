import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/Department';
import { Observable }  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiurl = '  http://localhost:4000/Departments';

  constructor(private http: HttpClient) { }
  Proceedregister(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  
  GetAll():Observable<Department []> {
    return this.http.get<Department []>(this.apiurl);
  }
  GetByID(code: any) {
    return this.http.get<any>(this.apiurl + '/' + code);
  }
  Updatedepartment(code: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + code, inputdata);
  }
  deleteDepartment(code: any){
    return this.http.delete(this.apiurl + '/' + code);    
  }
}
