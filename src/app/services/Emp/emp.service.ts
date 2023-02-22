import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  token: any;

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem('token');
  }

  getallemployees(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' :'Bearer '+this.token 
      })
    }
    return this.httpService.getService('/Emp/Get', true, header)
  }

  addEmployee(reqdata:any){
    //const body = JSON.stringify(reqdata)
    console.log(reqdata)
    let header = {
      headers: new HttpHeaders(
        {
          'Content-Type' : 'application/json' ,
          'Authorization' :'Bearer '+this.token 
        })
    }
    return this.httpService.postService('/Emp/Add',reqdata,true,header)
  }
  deleteEmployee(empId:any){
    let header = {
      headers : new HttpHeaders(
        {
          'Content-Type' : 'application/json' ,
          'Authorization' :'Bearer '+this.token 
        }
      )
    }
    return this.httpService.deleteService('/Emp/Delete?empId='+empId,true,header);
  }

  UpdateEmployee(empId:any,data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putService('/Emp/Update?empId='+empId,data,true,header);
  }
}
