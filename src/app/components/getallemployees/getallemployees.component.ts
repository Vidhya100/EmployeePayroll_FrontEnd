import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpService } from 'src/app/services/Emp/emp.service';
import { UpdateComponentComponent } from '../update-component/update-component.component';

@Component({
  selector: 'app-getallemployees',
  templateUrl: './getallemployees.component.html',
  styleUrls: ['./getallemployees.component.scss']
})
export class GetallemployeesComponent  implements OnInit{
  
  
  EmpList: any=[];
  deptArray:any=[];
  department:any=[];


  constructor(private empService: EmpService,public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.getAllEmployees();
  }
 

  getAllEmployees(){
    this.empService.getallemployees().subscribe((response:any)=>{
      console.log(response);
       this.EmpList= response.data;
      //console.log(this.EmpList);
    })
  }

  deleteEmployee(empId:any){
    return this.empService.deleteEmployee(empId).subscribe((response:Object)=>{
      console.log(response)
      this.getAllEmployees();
    })
  }
  
  openDialog(empObj:object) {
    const dialogRef = this.dialog.open(UpdateComponentComponent,{
      data:empObj
    })

    dialogRef.afterClosed().subscribe((response:object) => {
      console.log(`Dialog result: ${response}`);
    });
  }
  
}
