import { Component } from '@angular/core';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent {
  recetas = [
    { id: 1, name: 'Receta 1', stock: 10, sold: 2, status: 'OK' },
    { id: 2, name: 'Receta 2', stock: 8, sold: 5, status: 'OK' },
    { id: 3, name: 'Receta 3', stock: 12, sold: 4, status: 'OK' },
    { id: 4, name: 'Receta 4', stock: 7, sold: 3, status: 'OK' },
    { id: 1, name: 'Receta 5', stock: 10, sold: 2, status: 'OK' },
    { id: 2, name: 'Receta 6', stock: 8, sold: 5, status: 'OK' },
    { id: 3, name: 'Receta 7', stock: 12, sold: 4, status: 'OK' },
    { id: 4, name: 'Receta 8', stock: 7, sold: 3, status: 'OK' },
    { id: 4, name: 'Receta 9', stock: 7, sold: 3, status: 'OK' },
  ];

  pedidos: any[] = []; // Pedidos dinámicos

  // Estados del pedido
  pedidoEstados = ['Preparación', 'Horneado', 'OK'];

  // Maneja el click en "Elaborar"
  elaborarPedido(receta: any) {
    const nuevoPedido = {
      numero: this.pedidos.length + 1,
      receta: receta.name,
      tipo: 'Dulce', // Puedes ajustar el tipo según la receta
      estatus: 'Preparación',
    };
    this.pedidos.push(nuevoPedido); // Agrega el pedido a la tabla
    receta.status = 'Preparación'; // Actualiza la alerta de la receta
  }

  // Avanza el estado del pedido
  avanzarEstado(pedido: any) {
    const estadoActualIndex = this.pedidoEstados.indexOf(pedido.estatus);
    if (estadoActualIndex < this.pedidoEstados.length - 1) {
      pedido.estatus = this.pedidoEstados[estadoActualIndex + 1];
    }
  
    // Actualiza el estado de la receta correspondiente
    const receta = this.recetas.find((r) => r.name === pedido.receta);
    if (receta) {
      receta.status = pedido.estatus; // Sincroniza el estado del pedido con la receta
    }
  }
  

  // Cancela un pedido
  cancelarPedido(pedido: any) {
    // Elimina el pedido de la tabla
    this.pedidos = this.pedidos.filter((p) => p.numero !== pedido.numero);

    // Opcional: Restablece el estado de la receta si no hay más pedidos activos de esta receta
    const receta = this.recetas.find((r) => r.name === pedido.receta);
    const pedidosActivos = this.pedidos.some((p) => p.receta === pedido.receta);
    if (receta && !pedidosActivos) {
      receta.status = 'OK'; // Restablece el estado de la receta
    }
  }

  // Obtiene el estilo de la alerta según el estado
  // Obtiene el estilo de la alerta según el estado
getAlertStyle(receta: any): any {
  switch (receta.status) {
    case 'Preparación':
      return { backgroundColor: 'var(--yellow)', color: 'var(--brown)' };
    case 'Horneado':
      return { backgroundColor: 'var(--brown)', color: 'white' }; // Brown durante horneado
    case 'OK':
      return { backgroundColor: 'var(--green)', color: 'white' };
    default:
      return { backgroundColor: 'var(--gray)', color: 'white' };
  }
}

// Obtiene el ícono de la alerta según el estado
getAlertIcon(receta: any): string {
  switch (receta.status) {
    case 'Preparación':
      return 'pi pi-exclamation-triangle';
    case 'Horneado':
      return 'pi pi-info-circle'; // Icono de estufa
    case 'OK':
      return 'pi pi-check-circle';
    default:
      return 'pi pi-info-circle';
  }
}
}
