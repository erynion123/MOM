import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


// INJECTION
@Injectable({
   providedIn: 'root'
})

// SERVICE EXPORT
export class DataService {
  noInternetConnectivity: boolean = false;
  static counter: number = 0;
  private baseUrl: string = "https://cuddly-meal.herokuapp.com";
  private token: string = null;
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
  // CONSTRUCTOR
  constructor(
    private http: HttpClient,
    private _router: Router,
  ) {
  }

  ngOnInit() {

  }

  // private setToken() {
  //   const token = this.authService.getToken();
  //   if (token) {
  //     this.headers.set('Authorization','Token token="' + token + '", installation_identifier="x"');
  //   }
  // } // setToken

  // MAKE URL
  private getFullUrl(url, source = null) {
    return this.baseUrl + url;
  } // getFullUrl

  // RETURN RESPONSE
  extractData(this, res: Response) {
    return res || {};
  } // extractData

  // HANDLE ERROR
  private handleError(error: any,obs) {
    if (error.status == 401) {
      // this.authService.logout();
      // this._router.navigate(['user/logout']);
    }else if (error.status == 500){
      // if (noErrorUrl.length == 0){
      //   this.alertService.error("System error. Please try again later.",true);
      // }
    }
    return obs.throw(error || 'Server error');
  } // handleError

  // MAKES A GET REQUEST
  get(url, skip = false, source = null) {
    DataService.counter++;
    // let runSpinner = !this.noSpinner.includes(url);
    let options = this.httpOptions;
    // if (!skip) {
    //   this.setToken();
    // }

    url = this.getFullUrl(url, source);
    // const spinner = this.spinner;
      // if (runSpinner){
      //   spinner.show();
      // }
      return this.http
        .get(url, options)
        .pipe(map(
          (res: any) => {
            // this.spinner.hide();
            return this.extractData(res);
          }))
        .pipe(catchError((error:any,obs) => this.handleError(error,obs)))
  } // get

  // MAKES A POST REQUEST
  post(url, data, skip = false) {
    let body = JSON.stringify(data);
    // let runSpinner = !this.noSpinner.includes(url);
    let options = this.httpOptions;
    // if (!skip) {
    //   this.setToken();
    // }
    url = this.getFullUrl(url);
    // if(runSpinner){
    //   this.spinner.show();
    // }
    return this.http
      .post(url, body, options)
      .pipe(map(
        (res: any) => {
          // this.spinner.hide();
          return this.extractData(res);
        }))
      .pipe(catchError((error:any,obs) => this.handleError(error,obs)))
      // .finally(() => {this.spinner.hide() });
  } // post

  // MAKES PUT CALL
  put(url, data, skip = false) {
    let body = JSON.stringify(data);
    let options = this.httpOptions;
    if (!skip) {
      // this.setToken();
    }
    // this.setToken();
    url = this.getFullUrl(url);
    // this.spinner.show();
    return this.http
      .put(url, body, options)
      .pipe(map((res: any) => {
        // this.spinner.hide();
        return this.extractData(res);
      }))
      .pipe(catchError((error:any,obs) => this.handleError(error,obs)))
      // .finally(() => { this.spinner.hide() });
  } // put

  // MAKES DELETE CALL
  delete(url, skip = false) {
    let options = this.httpOptions;
    // if (!skip) {
    //   this.setToken();
    // }
    url = this.getFullUrl(url);
    // this.spinner.show();
    return this.http
      .delete(url, options)
      .pipe(map((res: any) => {
        // this.spinner.hide();
        return this.extractData(res);
      }))
      .pipe(catchError((error:any,obs) => this.handleError(error,obs)))
      // .finally(() => { this.spinner.hide() });
  } // delete

  // MAKES PATCH CALL
  patch(url, data, skip = false) {
    let body = JSON.stringify(data);
    let options = this.httpOptions;
    // if (!skip) {
    //   this.setToken();
    // }
    // this.setToken();
    url = this.getFullUrl(url);
    // this.spinner.show();
    return this.http
      .patch(url, body, options)
      .pipe(map((res: any) => {
        // this.spinner.hide();
        return this.extractData(res);
      }))
      .pipe(catchError((error:any,obs) => this.handleError(error,obs)))
      // .finally(() => { this.spinner.hide() });
  } // patch


  gmailLogin(){
    console.log('yaha');
    let url = "https://accounts.google.com/o/oauth2/v2/auth?client_id=460667822792-guht50p6751edt9bcmp5mhb7cqj3d2eh.apps.googleusercontent.com&response_type=code&openid%20email";
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    // let data = {
    //   client_id: "460667822792-vrivoeg8nv3m8h32kaojgq8u246ehgbn.apps.googleusercontent.com",
    //   response_type: "code",
    //   scope: "openid%20email"
    // }
    return this.http
      .get(url,options)
      .pipe(map(
        (res: any) => {
          // this.spinner.hide();
          console.log(this.extractData(res));
        }))
      .pipe(catchError((error:any,obs) => this.handleError(error,obs)))
  }

}
