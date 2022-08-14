import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'admin';
  jwtHelper = new JwtHelperService();
  isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());;
  decodedToken: any;
  constructor(private http: HttpClient) {

  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
            localStorage.setItem('username', this.decodedToken.name);
            this.isLoginSubject.next(true);
          }
        })
      )
  }

  hasToken() {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }



  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.isLoginSubject.next(false);
    console.log('logged out');
  }


  register(model: any) {
    console.log(model);
    return this.http.post(this.baseUrl + '/signup', model);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  loggedIn() {
    return this.hasToken();
  }


}
