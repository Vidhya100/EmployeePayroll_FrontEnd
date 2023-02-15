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
  
}
