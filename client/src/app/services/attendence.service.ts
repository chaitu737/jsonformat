import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


import {  HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  domain="http://localhost:3000";

  constructor(
    private http:HttpClient
  ) { }

  
  getnamelist(){
    return this.http.get(this.domain).map(res=>res)
  }


}
