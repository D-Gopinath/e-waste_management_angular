import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listuserRequests();
  }
  getFacility(){
    let facility = localStorage.getItem("companyData");
    return facility != null ? JSON.parse(facility): null;
  }
  fid = this.getFacility().id;
  ewastedata!:any;
  listuserRequests(){

    console.log(this.fid);

    const url = "https://e-waste-management-api.herokuapp.com/ewaste/viewbyfacility/"+this.fid;
    this.http.get(url).subscribe(res=>{
      console.log(res);
      this.ewastedata=res;
    },err=>{
      console.log(err.error.message);
          alert(err.error.message);
    })
  }

  accept(data:any){

    const EwasteData = {
      uid:data.uid,
      fid:data.fid,
      status:"Accepted"
    }

    this.response(EwasteData)
    
  }

  reject(data:any){

    const EwasteData = {
      uid:data.uid,
      fid:data.fid,
      status:"Rejected"
    }

    this.response(EwasteData)
    
  }

  response(EwasteData:any){

    const url="https://e-waste-management-api.herokuapp.com/facility/response";
      this.http.post(url,EwasteData).subscribe(res=>{
          alert("Responded")  
      },err=>{
        console.log(err.error.message);
        alert(err.error.message);
      })

  }

}
