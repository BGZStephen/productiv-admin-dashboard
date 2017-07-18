import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiService {

  apiUrl: string = environment.productivApiUrl;

  constructor(
    private http: Http,
  ) { }

  login(userObject) {
    const headers = new Headers();
    headers.append('Authorization', `${environment.adminAuthToken}`);
    return this.http.post(`${this.apiUrl}/users/authenticate`, userObject, {headers: headers});
  }


}
