import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { jsPDF } from 'jspdf'; // Importamos jsPDF

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent {
  date: number = Date.now(); // Fecha actual
  count: number = 1; // Contador de unidades
  tipoVenta: string = ''; // Tipo de venta seleccionado
  ticket: any[] = []; // Detalles del ticket
  generarPdf: boolean = false; // Variable para el checkbox

  // Propiedades para el cálculo de precios
  descuento: number = 0; // Descuento aplicado
  pago: number = 0; // Pago realizado por el cliente
  cambio: number = 0; // Cambio a devolver al cliente

  // Nueva propiedad para el subtotal
  get subtotal(): number {
    return this.ticket.reduce((sum, item) => sum + item.precio, 0);
  }

  // Propiedad para el total con descuento
  get totalConDescuento(): number {
    return this.subtotal - this.descuento;
  }

  constructor(private modalService: ModalService) {}

  // Lista de galletas con ID, precios y las imágenes
  galletas = [
    {
      id: 1,
      nombre: 'Galleta de Sorpresa Nuez',
      imagen: '../../../assets/img/galletaNuez.jpg',
      precioPieza: 10,
      precioKilo: 150,
      precioSuelta: 8,
      stock: 10, // Stock disponible
    },
    {
      id: 2,
      nombre: 'Galleta de Chispas',
      imagen: '../../../assets/img/galletaChispas.jpg',
      precioPieza: 12,
      precioKilo: 160,
      precioSuelta: 9,
      stock: 8, // Stock disponible
    },
    {
      id: 3,
      nombre: 'Galleta de Vainilla',
      imagen: '../../../assets/img/galletaVainilla.png',
      precioPieza: 11,
      precioKilo: 155,
      precioSuelta: 8,
      stock: 12, // Stock disponible
    },
    {
      id: 4,
      nombre: 'Galleta de Avena',
      imagen: '../../../assets/img/galletaAvena.jpg',
      precioPieza: 9,
      precioKilo: 140,
      precioSuelta: 7,
      stock: 7, // Stock disponible
    },
    {
      id: 5,
      nombre: 'Galleta de Coco',
      imagen: '../../../assets/img/galletaCoco.jpg',
      precioPieza: 10,
      precioKilo: 150,
      precioSuelta: 8,
      stock: 10, // Stock disponible
    },
    {
      id: 6,
      nombre: 'Galleta Integral',
      imagen: '../../../assets/img/galletaIntegral.jpeg',
      precioPieza: 13,
      precioKilo: 170,
      precioSuelta: 10,
      stock: 5, // Stock disponible
    },
    {
      id: 7,
      nombre: 'Galleta Clásica',
      imagen: '../../../assets/img/galletaClasica.jpg',
      precioPieza: 10,
      precioKilo: 150,
      precioSuelta: 8,
      stock: 20, // Stock disponible
    },
    {
      id: 8,
      nombre: 'Galleta de Chocolate',
      imagen: '../../../assets/img/galletaChocolate.jpg',
      precioPieza: 14,
      precioKilo: 180,
      precioSuelta: 11,
      stock: 8, // Stock disponible
    },
    {
      id: 9,
      nombre: 'Galleta de Polvorón',
      imagen: '../../../assets/img/galletaPolvoron.jpg',
      precioPieza: 9,
      precioKilo: 140,
      precioSuelta: 7,
      stock: 15, // Stock disponible
    },
  ];

  // Cambiar el tipo de venta
  seleccionarTipoVenta(tipo: string) {
    this.tipoVenta = tipo;
  }

  // Incrementa el contador
  increment() {
    this.count++;
  }

  // Decrementa el contador
  decrement() {
    if (this.count > 1) this.count--;
  }

  // Seleccionar una galleta
  seleccionarGalleta(galleta: any) {
    if (!this.tipoVenta) {
      alert('Por favor, seleccione el tipo de venta.');
      return;
    }

    // Verificar si hay suficiente stock
    if (galleta.stock < this.count) {
      alert(`No hay suficiente stock de ${galleta.nombre}. Enviando alerta a producción...`);
      this.alertaProduccion(galleta);
      return;
    }

    // Calcula el precio basado en el tipo de venta
    let precio;
    switch (this.tipoVenta) {
      case 'pieza':
        precio = galleta.precioPieza * this.count;
        break;
      case 'kilo':
        precio = galleta.precioKilo * this.count;
        break;
      case 'suelta':
        precio = galleta.precioSuelta * this.count;
        break;
    }

    // Agrega al ticket
    this.ticket.push({
      nombre: galleta.nombre,
      cantidad: this.count,
      precio,
      imagen: galleta.imagen, // Se mantiene la imagen de la galleta
    });

    // Restar stock de la galleta
    galleta.stock -= this.count;

    // Reinicia el contador
    this.count = 1;
  }

  // Función para alertar a producción
  alertaProduccion(galleta: any) {
    console.log(`Alerta a producción: La galleta ${galleta.nombre} necesita ser producida.`);
    // Aquí podrías agregar lógica real para notificar a producción, como una llamada a un servicio
  }

  // Calcular descuento y total con descuento
  calcularTotalConDescuento() {
    this.totalConDescuento; // Se recalcula automáticamente por el getter
  }

  // Calcular cambio
  calcularCambio() {
    this.cambio = this.pago - this.totalConDescuento;
  }

  registrarVenta() {
    if (this.ticket.length === 0) {
      alert('No hay productos en el ticket para registrar.');
      return;
    }

    // Si se marca el checkbox para generar el PDF
    if (this.generarPdf) {
      this.generarTicketPDF();
    }

    // Limpiar el ticket después de registrar
    this.ticket = []; // Limpia el ticket
    this.descuento = 0; // Reinicia el descuento
    this.pago = 0; // Reinicia el pago
    this.cambio = 0; // Reinicia el cambio
    alert('Venta registrada exitosamente');
  }

  // Función para generar el PDF del ticket
  generarTicketPDF() {
    const doc = new jsPDF();

    // Agregar imagen (Logo en la parte superior centrado)
    const logo = '../../../assets/img/galleta2.png'; // Asegúrate de tener la ruta correcta de tu imagen
    doc.addImage(logo, 'PNG', 75, 10, 60, 30); // Ajusta las coordenadas y tamaño del logo

    // Título del ticket
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Ticket de Venta', 105, 50, { align: 'center' }); // Título centrado

    // Fecha
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Fecha: ${new Date().toLocaleString()}`, 20, 60);

    // Línea de separación
    doc.setLineWidth(0.5);
    doc.line(20, 65, 190, 65); // Línea horizontal desde (x1, y1) hasta (x2, y2)

    // Detalles del ticket (Productos)
    let yPosition = 75; // Inicializa la posición vertical para los productos
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Productos:', 20, yPosition);

    this.ticket.forEach((item) => {
      yPosition += 8;
      doc.text(`${item.cantidad} x ${item.nombre}`, 20, yPosition);
      doc.text(`$${item.precio.toFixed(2)}`, 150, yPosition, {
        align: 'right',
      });
    });

    // Línea de separación
    yPosition += 10;
    doc.line(20, yPosition, 190, yPosition); // Línea horizontal

    // Subtotal
    yPosition += 5;
    doc.text(`Subtotal: $${this.subtotal.toFixed(2)}`, 20, yPosition);

    // Descuento
    yPosition += 5;
    doc.text(`Descuento: $${this.descuento.toFixed(2)}`, 20, yPosition);

    // Total con descuento
    yPosition += 5;
    doc.text(`Total: $${this.totalConDescuento.toFixed(2)}`, 20, yPosition);

    // Línea de separación
    yPosition += 10;
    doc.line(20, yPosition, 190, yPosition); // Línea horizontal

    // Pago
    yPosition += 5;
    doc.text(`Pago: $${this.pago.toFixed(2)}`, 20, yPosition);

    // Cambio
    yPosition += 5;
    doc.text(`Cambio: $${this.cambio.toFixed(2)}`, 20, yPosition);

    // Línea de separación final
    yPosition += 10;
    doc.line(20, yPosition, 190, yPosition); // Línea horizontal

    // Mensaje de agradecimiento
    yPosition += 10;
    doc.setFontSize(10);
    doc.text('¡Gracias por su compra!', 105, yPosition, { align: 'center' });
    // Línea de separación final
    yPosition += 10;
    doc.line(20, yPosition, 190, yPosition); // Línea horizontal
    yPosition += 10;
    doc.setFontSize(10);
    doc.text('¡De todo corazon Don Galleto!', 105, yPosition, {
      align: 'center',
    });
    // Descargar el PDF
    doc.save('ticket_venta.pdf');
  }

  // Abrir modal de producción
  produccion() {
    this.modalService.openModal();
  }
}
