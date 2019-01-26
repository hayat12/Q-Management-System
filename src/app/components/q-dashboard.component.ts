import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q-dashboard',
  templateUrl: './q-dashboard.component.html',
  styleUrls: ['./q-dashboard.component.css']
})
export class QDashboardComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  tr(){
    this.router.navigate(['m-screen'])
  }
}
