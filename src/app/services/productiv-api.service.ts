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

}
