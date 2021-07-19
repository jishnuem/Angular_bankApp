import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    aim="Welcome to SBL Bank"
    acno="Enter your account number"

    accno=""
    pwd=""

  users:any = {
    1000:{acno: 1000, username: "Aby", password: "userone", balance:5000},
    1001:{acno: 1001, username: "Aju", password: "usertwo", balance:6000},
    1002:{acno: 1002, username: "Ajay", password: "userthree", balance:7000},
    1003:{acno: 1003, username: "Arun", password: "userfour", balance:8000}
    

  }

  constructor() { }

  ngOnInit(): void {
  }
  accNum(event:any){
    //console.log(event.target.value);
    
   this.accno=event.target.value
  }
  changepwd(event:any){
    this.pwd=event.target.value
    //console.log(event.target.value);

  }
  login(){
    var accno=this.accno;
    var pwd=this.pwd;
    let accDetails=this.users;
    if(accno in accDetails){
      if(pwd==accDetails[accno]["password"]){
        alert("Login Successfull")
      }
      else{
      alert("Invalid Password")
      }
    }
    else{
      alert("Invalid Username")
    }

  }

}
