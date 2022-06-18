import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.listfacilities()
  }
  getUser(){
    let user = localStorage.getItem("userData");
    return user != null ? JSON.parse(user): null;
  }
  uid = this.getUser().id;
  facility!:any;
  listfacilities(){

    const url = "https://e-waste-management-api.herokuapp.com/facility/showAll";
    this.http.get(url).subscribe(res=>{
      this.facility=res;
    },err=>{
      console.log(err.error.message);
          alert(err.error.message);
    })
  }

}
