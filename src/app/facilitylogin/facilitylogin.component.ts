import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facilitylogin',
  templateUrl: './facilitylogin.component.html',
  styleUrls: ['./facilitylogin.component.css']
})
export class FacilityloginComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

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
      const url="http://localhost:9000/facility/login";
      this.http.post(url,user).subscribe(res=>{
        let user=res;
        this.toastr.success("Successfully LogedIn");
        alert("Successfully Logedin")
        localStorage.setItem('companyData',JSON.stringify(user));
        window.location.href='facility/dashboard';
      },err=>{
          alert(err.error.message);
          console.log(err.error.message);
          this.toastr.error(err.error.message);
          window.location.href="/homepage";
      })
    }
    catch(err){
      alert(err);
    }

  }

}
