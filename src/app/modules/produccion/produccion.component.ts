import { Component } from '@angular/core';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent {
  products = [
    { name: 'Galleta 1', sold: 10, stock: 20 },
    { name: 'Galleta 2', sold: 15, stock: 10 },
    { name: 'Galleta 3', sold: 5, stock: 25 },
    { name: 'Galleta 4', sold: 8, stock: 18 },
    { name: 'Galleta 5', sold: 12, stock: 8 },
    { name: 'Galleta 6', sold: 7, stock: 13 },
    { name: 'Galleta 7', sold: 20, stock: 5 },
    { name: 'Galleta 8', sold: 11, stock: 7 },
    { name: 'Galleta 9', sold: 9, stock: 14 },
  ];

  // Calcula el porcentaje de vendido
  getSoldPercentage(product: { sold: number; stock: number }): number {
    const total = product.sold + product.stock;
    return (product.sold / total) * 100;
  }

  // Calcula el porcentaje de stock restante
  getStockPercentage(product: { sold: number; stock: number }): number {
    const total = product.sold + product.stock;
    return (product.stock / total) * 100;
  }

  // Devuelve el estilo dinámico para la alerta
  getAlertStyle(product: { stock: number; sold: number }): any {
    const stockPercentage = this.getStockPercentage(product);
    if (stockPercentage < 20) {
      return { backgroundColor: 'var(--red)', color: 'white' }; // Bajo stock
    }
    if (stockPercentage < 50) {
      return { backgroundColor: 'var(--yellow)', color: 'var(--brown)' }; // Stock medio
    }
    return { backgroundColor: 'var(--green)', color: 'var(--brown)' }; // Stock alto
  }

  // Devuelve el ícono para la alerta según el porcentaje de stock
  getAlertIcon(product: { stock: number; sold: number }): string {
    const stockPercentage = this.getStockPercentage(product);
    if (stockPercentage < 20) return '⚠️'; // Advertencia
    if (stockPercentage < 50) return '⚡'; // Stock medio
    return '✅'; // Stock suficiente
  }
}
