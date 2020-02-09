import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
miVariable = 'hola';
obtenValor(elemento: HTMLInputElement): void {
  if (elemento.value === '') {
    alert('no se puede');
  } else {
    console.log(elemento.value);
    this.miVariable = elemento.value;
  }
}
}
