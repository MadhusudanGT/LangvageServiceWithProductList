import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  
  email: string='';
  password:string='';
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('PLEASE FILL VALIDE DETAILS', "!!!!", {
      duration: 5000,
    });
  }
  SuccessSnackBar(){
    this._snackBar.open('USER LOGIN SUCCESSFULLY', ":))))", {
      duration: 10000,
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
if (form.valid) {
  console.log(form.value);
  this.SuccessSnackBar();
  // ...our form is valid, we can submit the data
}else{
  this.openSnackBar(); 
}
  }
}
