import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private galletaAgotadaSource = new Subject<string>(); // Alerta de galleta agotada

  // Observable que se puede suscribir desde el módulo Cocina
  galletaAgotada$ = this.galletaAgotadaSource.asObservable();

  // Método para emitir alerta de galleta agotada
  notificarGalletaAgotada(nombreGalleta: string) {
    this.galletaAgotadaSource.next(nombreGalleta);
  }
}
