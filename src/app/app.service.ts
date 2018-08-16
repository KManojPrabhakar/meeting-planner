import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";

@Injectable()
export class AppService {
    // private url =  'http://localhost:3003';
  private url = 'http://meetingplanner-backend.testmanoj.com';
  private allCountryNames = 'https://restcountries.eu/rest/v2/all';

  constructor(    public http: HttpClient
) { }

 public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) =>{

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('countryCode', data.countryCode);

    return this.http.post(`${this.url}/api/v1/meetingPlanner/signup`, params);

  } // end of signupFunction function.

  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/meetingPlanner/login`, params);
  } // end of signinFunction function.

  public resetFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('resetPassword', data.resetPassword)
      .set('resetPasswordToken', data.resetPasswordToken);

    return this.http.post(`${this.url}/api/v1/meetingPlanner/reset`, params);
  } // end of resetFunction .

   public forgotFunction(data): Observable<any> {
    debugger;
    const params = new HttpParams()
      .set('forgotEmail', data.forgotEmail)

    return this.http.post(`${this.url}/api/v1/meetingPlanner/forgot`, params);
  } 

    public getCountryNames = () => {
    let response = this.http.get(this.allCountryNames);
		return response;

  }

   public getallUsers(): Observable<any> {
    debugger;
    

    return this.http.get(`${this.url}/api/v1/meetingPlanner/allUsers`);
  } 


}
