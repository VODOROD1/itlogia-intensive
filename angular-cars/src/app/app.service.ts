import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

  // [
  //   {
  //     image: '1.png',
  //     name: 'Lamborghini Huracan Spyder',
  //     transmission: 'автомат',
  //     engine: '5.2 л.с.',
  //     year: '2019',
  //   },
  //   {
  //     image: '2.png',
  //     name: 'Chevrolet Corvette',
  //     transmission: 'автомат',
  //     engine: '6.2 л.с.',
  //     year: '2017',
  //   },
  //   {
  //     image: '3.png',
  //     name: 'Ferrari California',
  //     transmission: 'автомат',
  //     engine: '3.9 л.с.',
  //     year: '2010',
  //   },
  //   {
  //     image: '4.png',
  //     name: 'Lamborghini Urus',
  //     transmission: 'автомат',
  //     engine: '4.0 л.с.',
  //     year: '2019',
  //   },
  //   {
  //     image: '5.png',
  //     name: 'Audi R8',
  //     transmission: 'автомат',
  //     engine: '5.2 л.с.',
  //     year: '2018',
  //   },
  //   {
  //     image: '6.png',
  //     name: 'Chevrolet Camaro',
  //     transmission: 'автомат',
  //     engine: '2.0 л.с.',
  //     year: '2019',
  //   },
  //   {
  //     image: '7.png',
  //     name: 'Maserati Quattroporte',
  //     transmission: 'автомат',
  //     engine: '3.0 л.с.',
  //     year: '2018',
  //   },
  //   {
  //     image: '8.png',
  //     name: 'Dodge Challenger',
  //     transmission: 'автомат',
  //     engine: '6.4 л.с.',
  //     year: '2019',
  //   },
  //   {
  //     image: '9.png',
  //     name: 'Nissan GT-R',
  //     transmission: 'автомат',
  //     engine: '3.8 л.с.',
  //     year: '2019',
  //   },
  // ];

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
