import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';

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

export class AppComponent implements OnInit {
  title = 'angular-cars';
  priceForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    telephone: ['', Validators.required],
    car: ['', Validators.required],
  });

  carsData: ICar[];

  @ViewChild('main', { static: false })
  mainRef: ElementRef;

  @ViewChild('priceImage', { static: false })
  priceImage: ElementRef;

  constructor(private fb: FormBuilder, private appService: AppService) {
    // Я решил добавить parallax-эффект на свой манер
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('scroll', () => {
        this.mainRef.nativeElement.style.backgroundPositionX =
          '0' + 0.3 * window.pageYOffset + 'px';
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

  ngOnInit() {
    this.appService.getData()
    .subscribe({
      next: (res) => {
        debugger;
        this.carsData;
      },
      error: (err) => {
        debugger;
      }
    })
  }

  goScroll(target: HTMLElement, car?: ICar) {
    target.scrollIntoView({ behavior: 'smooth' });
    if (car) {
      this.priceForm.patchValue({ car: car.name });
    }
  }

  priceActionHandler() {
    if (this.priceForm.valid) {
      alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время!');
      this.appService.sendQuary(this.priceForm.value)
      .subscribe({
        next: (res) => {
          debugger;
        },
        error: (err) => {
          debugger;
        }
      });
      this.priceForm.reset();
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
  }
}
