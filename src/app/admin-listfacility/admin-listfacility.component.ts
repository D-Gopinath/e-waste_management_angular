import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-listfacility',
  templateUrl: './admin-listfacility.component.html',
  styleUrls: ['./admin-listfacility.component.css']
})
export class AdminListfacilityComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listFacility();
  }

  facilityList! :any;

  listFacility(){
    const url="https://e-waste-management-api.herokuapp.com/admin/facilitylist";
    this.http.get(url).subscribe(res=>{
      this.facilityList=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

  deleteFacility(facility:any){

    const id=facility.id;
    const url="https://e-waste-management-api.herokuapp.com/admin/deletefacility/"+id;
    this.http.delete(url).subscribe(res=>{
      alert("Successfully deleted");
      window.location.reload();
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })

  }

}
