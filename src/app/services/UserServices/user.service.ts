import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token : any;
  

  constructor(private httpService : HttpService) {
    this.token=localStorage.getItem('token');
  }  
  
  register(reqdata:any){
    let header = {
      headers: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/Registration',reqdata,false,header)
  }
  login(reqdata:any){
    let header = {
      headers: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/Login',reqdata,false,header)
  }
}
