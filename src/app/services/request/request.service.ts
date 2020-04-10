import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  async request(
    method: string,
    uri: string,
    data: any,
    headers: any,
    auth: boolean = true,
    multipart: boolean = false,
  ) {
    if (['POST', 'PUT', 'DELETE'].includes(method)) {
      auth = true;
    }
    if (auth) {
      const accessToken = localStorage.getItem('access_token');
      headers['Authorization'] = 'Bearer ' + accessToken;
    }

    headers = {headers};
    try {
      let httpResponse: Promise<any>;
      switch (method) {
        case 'GET':
          uri = this.serializeUrl(uri, data);
          httpResponse = this.httpClient.get(uri, headers).toPromise();
          break;
        case 'POST':
          httpResponse = this.httpClient.post(uri, data, headers).toPromise();
          break;
        case 'PUT':
          httpResponse = this.httpClient.put(uri, data, headers).toPromise();
          break;
        case 'DELETE':
          uri = this.serializeUrl(uri, data);
          httpResponse = this.httpClient.delete(uri, headers).toPromise();
          break;
      }

      const response = await httpResponse;

      return response;
    } catch (error) {
      // Unauthorized Error 401
      if (error.status === 401) {
        localStorage.removeItem('access_token');
        this.router.navigate(['/'])
      }
    
      throw error;
    }

  }
  serializeUrl(uri, params) {
    const str = [];

    for (const p in params) {
      if (params.hasOwnProperty(p) && params[p] !== null) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
      }
    }

    if (str.length) {
      return uri + '?' + str.join('&');
    } else {
      return uri;
    }
  }
}
