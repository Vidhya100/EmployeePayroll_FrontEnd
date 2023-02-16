import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/services/Emp/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent {
  employeeform!:FormGroup;
  submitted=false;
  hr:string='';
  deptArray:any=[]; 
  id:Number=0;
  deptname:string='';
  checked:boolean=true; 

  constructor(private router:Router,private formBuilder:FormBuilder,private empservice:EmpService){}

  ngOnInit(): void {
    this.employeeform = this.formBuilder.group({
      name: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
      department: this.formBuilder.array([]),
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date: ['', [Validators.required]],
      inputnotes: ['', [Validators.required]],

    })
    this.getDeptList();
  }
  get f() { return this.employeeform.controls; }
  
  //get department

  getDeptList(){
    this.deptArray=[
      {id:1,deptname:'HR',checked:false},
      {id:2,deptname:'Sales',checked:false},
      {id:3,deptname:'Finance',checked:false},
      {id:4,deptname:'Engineer',checked:false},
      {id:5,deptname:'Other',checked:false},
    ]
}
  onChange($event:any){
   const id=$event.target.value;
   const isChecked=$event.target.checked;
   const deptname=$event.target.name;
   console.log(id,isChecked,deptname)

   const department: FormArray = this.employeeform.get('department') as FormArray;

    if (isChecked) {
      department.push(new FormControl(id));
      //const selectDept = JSON.stringify(department);
    } else {
      const index = department.controls.findIndex(x => x.value === id);
      department.removeAt(index);
    }
  }

  OnSubmit(){
    this.submitted = true;

    if(this.employeeform.valid){
    let payload = {
      empName: this.employeeform.value.name,
      profileImg: this.employeeform.value.profileImage,
      department: this.employeeform.value.department,
      gender: this.employeeform.value.gender,
      salary: this.employeeform.value.salary,
      startDate: this.employeeform.value.date,
      Notes: this.employeeform.value.inputnotes,
    }
    console.log(payload)
    this.empservice.addEmployee(payload).subscribe((response:Object)=>{
        console.log(response)
      })
  }
}
}
