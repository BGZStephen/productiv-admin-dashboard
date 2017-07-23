import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ProductivApiService {

  constructor(
    private http: Http,
  ) { }

  apiUrl: string = environment.productivApiUrl

  login(userObject) {
    const headers = new Headers();
    headers.append('Authorization', `${environment.adminAuthToken}`);
    return this.http.post(`${this.apiUrl}/users/authenticate`, userObject, {headers: headers});
  }

  storeToken(token) {
    localStorage.setItem('token', token)
  }

  getUsers() {
    const headers = new Headers();
    const token = localStorage.getItem('token')
    headers.append('Authorization', `${environment.adminAuthToken}`);
    headers.append('Token', `${token}`);
    return this.http.get(`${this.apiUrl}/users`, {headers: headers});
  }

}
