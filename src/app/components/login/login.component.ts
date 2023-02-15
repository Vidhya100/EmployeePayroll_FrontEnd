import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm! : FormGroup
  hide = true;
  submitted = false;
  constructor(private form:FormBuilder,private user: UserService, private router: Router,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
    })
  }

  get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.valid) {
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
       
      }

       this.user.login(payload).subscribe((response:any)=>{
        console.log(response)

         //added for storing token locally
        localStorage.setItem("token",response.data)

       this.router.navigateByUrl('/dashboard/getAllEmployees')
      })
  }
  let snackBarRef = this._snackBar.open('Logged in succesfully','',{duration:2000});
}
}
