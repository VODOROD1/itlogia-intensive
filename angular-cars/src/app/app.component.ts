import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  goScroll(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  priceActionHandler() {
    if(this.priceForm.valid) {
      alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")
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
