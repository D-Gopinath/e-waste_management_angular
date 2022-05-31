import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listrequests();
  }

  getUser(){
    let user = localStorage.getItem("userData");
    return user != null ? JSON.parse(user): null;
  }
  uid = this.getUser().id;
  ewastedata!:any;
  listrequests(){

    const url = "http://localhost:9000/ewaste/viewbyuser/"+this.uid;
    this.http.get(url).subscribe(res=>{
      this.ewastedata=res;
    },err=>{
      console.log(err.error.message);
          alert(err.error.message);
    })
  }

}
