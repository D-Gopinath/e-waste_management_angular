import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-listusers',
  templateUrl: './admin-listusers.component.html',
  styleUrls: ['./admin-listusers.component.css']
})
export class AdminListusersComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.listUsers();
  }
  usersList!:any;

  listUsers(){
    const url="https://e-waste-management-api.herokuapp.com/admin/userslist";
    this.http.get(url).subscribe(res=>{
      this.usersList=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

  deleteUser(user:any){

    const id=user.id;
    const url="https://e-waste-management-api.herokuapp.com/admin/deleteuser/"+id;
    this.http.delete(url).subscribe(res=>{
      alert("Successfully deleted");
      this.router.navigate(["admin/userslist"]);
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })

  }

}
