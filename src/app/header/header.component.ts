import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    let user = localStorage.getItem("userData");
    return user != null ? true: false;
  }

  getUser(){
    let user = localStorage.getItem("userData");
    return user != null ? JSON.parse(user): null;
  }

  logout(){
    localStorage.removeItem("userData");
    localStorage.removeItem("companyData");
    alert("Logout Successful");
    this.router.navigate(["homepage"]);
  }

  isFacilityLoggedIn(){
    let facility = localStorage.getItem("companyData");
    return facility != null ? true: false;
  }

  getFacility(){
    let facility = localStorage.getItem("compnayData");
    return facility != null ? JSON.parse(facility): null;
  }

}
