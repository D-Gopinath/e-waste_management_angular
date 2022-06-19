import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  email!:string;
  password!:string;

  login(){

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
      const url="https://e-waste-management-api.herokuapp.com/users/login";
      this.http.post(url,user).subscribe(res=>{
        let user=res;
        this.toastr.success("Successfully LogedIn");
        alert("Successfully Logedin")
        localStorage.setItem('userData',JSON.stringify(user));
        this.router.navigate(["user/dashboard"]); 
      },err=>{
          alert(err.error.message);
          console.log(err.error.message);
          this.toastr.error(err.error.message);
          this.router.navigate(["homepage"]); 
      })
    }
    catch(err){
      alert(err);
    }

  }

}
