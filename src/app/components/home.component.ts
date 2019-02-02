import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fGroup: FormGroup;
  lists:any = null;
  isNewUser:boolean = false;
  isMember:boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.fGroup = this.fb.group(
      {
        search: [null, [Validators.required]]
      }
    )
  }

  onSubmit(value){
    this.service.querySearch(value.search).subscribe((res:any)=>{
      this.lists = res;
      this.isNewUser = false;
      this.isMember = true;
    },(err)=>{
      console.log(err);
      this.isMember = false;
      this.isNewUser = true;
    })
  }
  
  queueBill(data){
    console.log(data);
    this.router.navigate(['q-dash',data.id]);
  }

}
 