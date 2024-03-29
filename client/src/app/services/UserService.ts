import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';
import { UserLoginDetails } from '../models/UserLoginDetails';
import { UserRegistrationDetails } from '../models/UserRegistrationDetails';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isNotLoggedIn: boolean = true;
  public userIsAdmin: boolean = false;
  public userType: string;

  constructor(private http: HttpClient) {}
  public login(
    userLoginDetails: UserLoginDetails
  ): Observable<SuccessfulLoginServerResponse> {
    return this.http.post<SuccessfulLoginServerResponse>(
      'http://localhost:80/users/login',
      userLoginDetails
    );
  }

  public createUser(
    userRegistrationDetails: UserRegistrationDetails
  ): Observable<void> {
    return this.http.post<void>(
      'http://localhost:80/users/register',
      userRegistrationDetails
    );
  }

  public isUserLoggedIn() {
    let userToken = sessionStorage.getItem('LoginToken');
    if (userToken == null || userToken == undefined) {
      this.isNotLoggedIn = true;
    } else {
      this.isNotLoggedIn = false;
    }
  }
}
