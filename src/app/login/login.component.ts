import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    aim="Welcome to SBL Bank"
    accno="Enter your account number"

    acno=""
    pswd=""

  users:any = {
    1000:{acno: 1000, username: "Aby", password: "userone", balance:5000},
    1001:{acno: 1001, username: "Aju", password: "usertwo", balance:6000},
    1002:{acno: 1002, username: "Ajay", password: "userthree", balance:7000},
    1003:{acno: 1003, username: "Arun", password: "userfour", balance:8000}
    

  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  login(){
    var acno=this.acno;
    console.log(acno);
    
    var pswd=this.pswd;
    console.log(pswd);
    
    
    
    let accDetails=this.users;
    if(acno in accDetails){
      if(pswd==accDetails[acno]["password"]){
        alert("Login Successfull")
        this.router.navigateByUrl("dashboard")
      }
      else{
      alert("Invalid Password")
      }
    }
    else{
      alert("Invalid Username")
    }

  }
  // login(){
  //   var accno=this.accno;
  //   var pwd=this.pwd;
  //   let accDetails=this.users;
  //   if(accno in accDetails){
  //     if(pwd==accDetails[accno]["password"]){
  //       alert("Login Successfull")
  //     }
  //     else{
  //     alert("Invalid Password")
  //     }
  //   }
  //   else{
  //     alert("Invalid Username")
  //   }

  // }

}
