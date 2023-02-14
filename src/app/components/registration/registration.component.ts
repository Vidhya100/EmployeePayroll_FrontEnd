import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/UserServices/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  signupForm! : FormGroup;
  
  hide = true;
  submitted = false;
  
  
  constructor(private form:FormBuilder,private user: UserService,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.signupForm = this.form.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
    
  }

  get f() { return this.signupForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.signupForm.valid) {
    let payload = {
      firstName: this.signupForm.value.firstname,
      lastName: this.signupForm.value.lastname,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    }
     this.user.register(payload).subscribe((response:any)=>{
      console.log(response)

      //localStorage.setItem("token",response.data)
    })
  }
  let snackBarRef = this._snackBar.open('Registered successfully','',{duration:2000});
}
}
