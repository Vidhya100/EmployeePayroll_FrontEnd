import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/Emp/emp.service';

@Component({
  selector: 'app-getallemployees',
  templateUrl: './getallemployees.component.html',
  styleUrls: ['./getallemployees.component.scss']
})
export class GetallemployeesComponent  implements OnInit{
  
  Name: any;
  Gender: any;
  Department: any;
  salary: any;
  startDate: any;
  EmpList: any
  submitted=false;

  constructor(private empService: EmpService){

  }
  ngOnInit(): void {
    this.getAllEmployees();
  }
 
  displayedColumns: string[] = ['EmpId', 'Name', 'Gender', 'Department', 'Salary', 'Start Date', 'Action'];
  getAllEmployees(){
    this.empService.getallemployees().subscribe((response:any)=>{
      console.log(response);
      this.EmpList = response.data;
    })
  }
  clickedRows(){
    this.submitted=true;
  }

  
  
}
