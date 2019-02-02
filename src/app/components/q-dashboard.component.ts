import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-q-dashboard',
  templateUrl: './q-dashboard.component.html',
  styleUrls: ['./q-dashboard.component.css']
})
export class QDashboardComponent implements OnInit {
  user:any;
  constructor(
    private router: Router,
    private service:ServiceService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    var userId = this.route.snapshot.params.id;
    this.getCurrentUserDetails(userId);
  }

  tr(){
    this.router.navigate(['m-screen'])
  }

  getCurrentUserDetails(id){
    this.service.queryGetQueUser(id).subscribe((res:any)=>{
      this.user = res.data;
      console.log(this.user);
    },(err)=>{
      console.log(err);
      this.location.back();
    })
  }
}
