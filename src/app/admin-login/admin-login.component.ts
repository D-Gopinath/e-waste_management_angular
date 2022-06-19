import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  email!:string;
  password!:string;
  adminLogin(){

    const email = this.email;
    const password = this.password;

    try{
      if(email==null || email.trim()==""){
        throw new Error("Invalid Email");
      }
      if(password.length<8){
        throw new Error("Invalid Password");
      }
      const user ={
        email:email,
        password:password
      }
      const url="https://e-waste-management-api.herokuapp.com/admin/login";
      this.http.post(url,user).subscribe(res=>{
        let user=res;
        alert("Access Granted")
        localStorage.setItem('userData',JSON.stringify(user));
        this.router.navigate(["admin/userslist"]); 
      },err=>{
          alert(err.error.message);
          console.log(err.error.message);
          this.router.navigate(["homepage"]); 
      })
    }
    catch(err){
      alert(err);
    }

  }
}
