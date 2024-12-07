import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'], // Cambio aquí a styleUrls
})
export class VentasComponent {
  value: string | undefined;

  date: number = Date.now(); // Variable para la fecha actual

  count: number = 1; // Contador de unidades

  galletas = [
    { nombre: 'Galleta 1', imagen: 'assets/galleta1.jpg' },
    { nombre: 'Galleta 2', imagen: 'assets/galleta2.png' },
    { nombre: 'Galleta 3', imagen: 'assets/galleta3.jpg' },
    { nombre: 'Galleta 4', imagen: 'assets/galleta4.jpg' },
    { nombre: 'Galleta 5', imagen: 'assets/galleta5.jpg' },
    { nombre: 'Galleta 6', imagen: 'assets/galleta6.jpg' },
    { nombre: 'Galleta 7', imagen: 'assets/galleta7.jpg' },
    { nombre: 'Galleta 8', imagen: 'assets/galleta8.jpg' },
    { nombre: 'Galleta 9', imagen: 'assets/galleta9.jpg' },
  ];

  increment() {
    this.count++; // Incrementa el contador
  }

  decrement() {
    if (this.count > 1) this.count--; // Decrementa el contador solo si es mayor que 1
  }

  seleccionarGalleta(galeta:  any) {
    // Aquí podrías manejar la lógica para seleccionar la galleta
  }
}
