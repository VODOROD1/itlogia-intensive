import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ICar {
  image: string;
  name: string;
  transmission: string;
  engine: string;
  year: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cars';
  priceForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    telephone: ['', Validators.required],
    car: ['', Validators.required],
  });

  carsData: ICar[] = [
    {
      image: '1.png',
      name: 'Lamborghini Huracan Spyder',
      transmission: 'автомат',
      engine: '5.2 л.с.',
      year: '2019',
    },
    {
      image: '2.png',
      name: 'Chevrolet Corvette',
      transmission: 'автомат',
      engine: '6.2 л.с.',
      year: '2017',
    },
    {
      image: '3.png',
      name: 'Ferrari California',
      transmission: 'автомат',
      engine: '3.9 л.с.',
      year: '2010',
    },
    {
      image: '4.png',
      name: 'Lamborghini Urus',
      transmission: 'автомат',
      engine: '4.0 л.с.',
      year: '2019',
    },
    {
      image: '5.png',
      name: 'Audi R8',
      transmission: 'автомат',
      engine: '5.2 л.с.',
      year: '2018',
    },
    {
      image: '6.png',
      name: 'Chevrolet Camaro',
      transmission: 'автомат',
      engine: '2.0 л.с.',
      year: '2019',
    },
    {
      image: '7.png',
      name: 'Maserati Quattroporte',
      transmission: 'автомат',
      engine: '3.0 л.с.',
      year: '2018',
    },
    {
      image: '8.png',
      name: 'Dodge Challenger',
      transmission: 'автомат',
      engine: '6.4 л.с.',
      year: '2019',
    },
    {
      image: '9.png',
      name: 'Nissan GT-R',
      transmission: 'автомат',
      engine: '3.8 л.с.',
      year: '2019',
    },
  ];

  @ViewChild('main', {static: false})
  mainRef: ElementRef;

  @ViewChild('priceImage', {static: false})
  priceImage: ElementRef;

  constructor(private fb: FormBuilder) {
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('scroll', () => {
        this.mainRef.nativeElement.style.backgroundPositionX = '0' + 0.3 * window.pageYOffset + 'px';
      });

      document.addEventListener('mousemove', (event) => {
        this.priceImage.nativeElement.style.transform =
          'translate3d(' +
          (event.clientX * 0.4) / 8 +
          'px,' +
          (event.clientY * 0.4) / 8 +
          'px,0px)';
      });
    });
  }

  goScroll(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  priceActionHandler() {
    if (this.priceForm.valid) {
      alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время!');
    }

    if (this.priceForm.get('name')?.value === '') {
      alert('Заполните поле имя!');
    }
    if (this.priceForm.get('telephone')?.value === '') {
      alert('Заполните поле номер телефона!');
    }
    if (this.priceForm.get('car')?.value === '') {
      alert('Заполните поле желаемый автомобиль!');
    }

    this.priceForm.reset();
  }
}
