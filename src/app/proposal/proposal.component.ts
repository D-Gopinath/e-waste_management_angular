import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  uid: any;
  fid: any;

  constructor(private http:HttpClient,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    this.fid = this.route.snapshot.params['fid'];
  }

  type!:string;
  weight!:string;
  proof!:any;
  upi!:string;

  getUser(){
    let user = localStorage.getItem("userData");
    return user != null ? JSON.parse(user): null;
  }

  request(){
    const uid = this.uid;
    const name = this.getUser().name;
    const fid = this.fid;
    const wastetype = this.type;
    const weight = this.weight;
    const proof = this.proof;
    const fromaddress = this.getUser().address;
    const upi= this.upi;

    try{
      if(wastetype==null){
        throw new Error("Select type of waste");
      }
      if(proof===null){
        throw new Error("Add proof");
      }
      if(weight == null){
        throw new Error("Mention the weight");
      }
      if(upi==null){
        throw new Error("enter upi for transaction");
      }
      const EwasteData = {
        uid:uid,
        username:name,
        fid:fid,
        wasteType:wastetype,
        weight:weight,
        proof:proof,
        fromAddress:fromaddress,
        upi:upi
      }
      const url="http://localhost:9000/ewaste/details";
      this.http.post(url,EwasteData).subscribe(res=>{
          alert("Request Sent ...After Acccepttance you can send your e-wastes");
          window.location.href="user/dashboard";
        
      },err=>{
        console.log(err.error.message);
        alert(err.error.message);
        window.location.href="user/dashboard";
      })
    }
    catch(err:any)
    {
      console.log(err);
      alert(err);                
    }
  

    
  }

}
