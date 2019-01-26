import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-appointment',
  templateUrl: './p-appointment.component.html',
  styleUrls: ['./p-appointment.component.css']
})
export class PAppointmentComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  toQM(){
    this.router.navigate(['q-management'])
  }
}
