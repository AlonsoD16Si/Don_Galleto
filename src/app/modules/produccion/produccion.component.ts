import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent {
  showModal = false;


  products = [
    { name: 'Galleta 1', sold: 10, stock: 2 },
    { name: 'Galleta 2', sold: 15, stock: 1 },
    { name: 'Galleta 3', sold: 5, stock: 25 },
    { name: 'Galleta 4', sold: 8, stock: 18 },
    { name: 'Galleta 5', sold: 12, stock: 8 },
    { name: 'Galleta 6', sold: 7, stock: 13 },
    { name: 'Galleta 7', sold: 20, stock: 5 },
    { name: 'Galleta 8', sold: 11, stock: 7 },
    { name: 'Galleta 9', sold: 9, stock: 14 },
  ];

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalState$.subscribe((state) => {
      this.showModal = state;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

  // Método para cerrar el modal
 

  // Método para abrir el modal (opcional)
  openModal() {
    this.showModal = true;
  }

  // Método para calcular el porcentaje de vendido
  getSoldPercentage(product: { sold: number; stock: number }): number {
    const total = product.sold + product.stock;
    return (product.sold / total) * 100;
  }

  // Método para calcular el porcentaje de stock restante
  getStockPercentage(product: { sold: number; stock: number }): number {
    const total = product.sold + product.stock;
    return (product.stock / total) * 100;
  }

  getAlertIcon(product: { stock: number; sold: number }): string {
    const stockPercentage = this.getStockPercentage(product);
  
    if (stockPercentage < 20) {
      return 'pi pi-exclamation-triangle'; // Triángulo amarillo
    }
    if (stockPercentage < 50) {
      return 'pi pi-exclamation-circle'; // Círculo amarillo
    }
    return 'pi pi-check-circle'; // Círculo verde
  }
  
  getAlertStyle(product: { stock: number; sold: number }): any {
    const stockPercentage = this.getStockPercentage(product);
  
    if (stockPercentage < 20) {
      return { backgroundColor: 'var(--red)', color: 'white' }; // Fondo rojo
    }
    if (stockPercentage < 50) {
      return { backgroundColor: 'var(--yellow)', color: 'var(--brown)' }; // Fondo amarillo
    }
    return { backgroundColor: 'var(--green)', color: 'white' }; // Fondo verde
  }
    
}
