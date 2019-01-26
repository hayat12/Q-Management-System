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
    // this.service.querySearch(value.search).subscribe((res:any)=>{
    //   this.lists = res;
    // },(err)=>{
    //   console.log(err);
    // })
    this.router.navigate(['q-dash'])
  }

}
 