import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  async request(
    method: string,
    uri: string,
    data: any,
    headers: any,
    auth: boolean = true,
  ) {
    if (["POST", "PUT", "DELETE"].includes(method)) {
      auth = true;
    }
    if (auth){
      let access_token = localStorage.getItem('access_token');
      headers.Authorization = 'Bearer ' + access_token;
    }

    headers = {headers}
       
    try {
      let httpResponse: Promise<any>;
      switch (method) {
        case "GET":
          uri = this.serializeUrl(uri, data);
          httpResponse = this.httpClient.get(uri, headers).toPromise();
          break;
        case "POST":
          httpResponse = this.httpClient.post(uri, data, headers).toPromise();
          break;
        case "PUT":
          httpResponse = this.httpClient.put(uri, data, headers).toPromise();
          break;
        case "DELETE":
          uri = this.serializeUrl(uri, data);
          httpResponse = this.httpClient.delete(uri, headers).toPromise();
          break;
      }

      let response = await httpResponse;

      //Unauthorized Error 401
      if (response.status == 401) {
        localStorage.removeItem('access_token');
      }

      return response;
    } catch (error) {
      throw error;
    }

  }

  serializeUrl(uri, params) {
    var str = [];

    for (var p in params) {
      if (params.hasOwnProperty(p) && params[p] !== null) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
      }
    }

    if (str.length) {
      return uri + '?' + str.join("&");
    } else {
      return uri;
    }
  }
}
