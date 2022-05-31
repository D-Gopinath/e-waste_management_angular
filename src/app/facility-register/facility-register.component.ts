import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facility-register',
  templateUrl: './facility-register.component.html',
  styleUrls: ['./facility-register.component.css']
})
export class FacilityRegisterComponent implements OnInit {

  constructor(private http:HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  companyname!:string;
  address1!:string;
  address2!:string;
  city!:string;
  state!:string;
  zip!:string;
  email!:string;
  phone!:string;
  password!:string;

  register(){
    const name = this.companyname;
    const address = this.address1+','+this.address2 +','+ this.city+','+ this.state +','+ this.zip;
    const phone = this.phone;
    const email = this.email;
    const password = this.password;

    try {

      if(name==null || name.trim()=="" || name.length<3){
          throw new Error("Invalid Company Name");
      }
      if(address==null|| address.trim()==""){
        throw new Error("Invalid Address")
      }
      if(phone.length!=10){
          throw new Error("Invalid Phone");
      }
      if(email==null || email.trim()==""){
          throw new Error("Invalid Email");
      }
      if(password.length<8){
          throw new Error("Invalid Password");
      }
      const user ={
        name:name,
        address:address,
        contactNo:phone,
        email:email,
        password:password
      }
      const url="http://localhost:9000/facility/register";
      this.http.post(url,user).subscribe(res=>{
          alert("Successfully Registered")
          this.toastr.success("successfully registered");
          window.location.href="/facility/login";
        
      },err=>{
        console.log(err.error.message);
        alert(err.error.message);
        this.toastr.error(err.error.message);
        window.location.href="/facility/login";
      })      
  }
  catch(err:any)
  {
    console.log(err);
    alert(err);
    this.toastr.error(""+err.message);                
  }

  }

}
