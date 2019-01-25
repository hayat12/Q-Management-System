import { Injectable } from '@angular/core';
import { Observable, using } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url: string = 'http://localhost:3004/list';
  constructor(
    private http: HttpClient
  ) { }

  querySearch(id:number):Observable<object>{
    return this.http.get(`${this.url}/${id}`);
  }
}
