import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

/**
 * @see Lodash_Components 
 */


var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fGroup: FormGroup;
  lists: any = null;
  isNewUser: boolean = false;
  isMember: boolean = false;
  result = [];

  p_num = ['000', '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012']

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.fGroup = this.fb.group(
      {
        search: [null, [Validators.required, Validators.pattern(/[0-9]$/)]]
      }
    )
  }

  onSubmit(value) {
    // this.service.querySearch(value.search).subscribe((res:any)=>{
    //   this.lists = res;
    //   this.isNewUser = false;
    //   this.isMember = true;
    // },(err)=>{
    //   console.log(err);
    //   this.isMember = false;
    //   this.isNewUser = true;
    // })

    var ar;
    this.service.queryTest().subscribe((res: any) => {
      _.find(res.appiontment, function (o) {
        ar = o;
        return o.id == value.search;
      });
      if (ar.id !<5) {
        this.lists = ar;
        this.isNewUser = false;
        this.isMember = true;
      } else {
        this.isMember = false;
        this.isNewUser = true;
      }
    })
  }

  queueBill(data) {
    this.router.navigate(['q-dash', data.id]);
  }

  newUser() {
    alert('please visit counter');
  }

}
