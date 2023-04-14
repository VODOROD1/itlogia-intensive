import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  sendQuary(data: any) {
    debugger;
    return this.http.post('https://testologia.site/intensive-price', data)
  }

  getData() {
    debugger;
    return this.http.get('https://testologia.site/intensive-data')
  }
}
