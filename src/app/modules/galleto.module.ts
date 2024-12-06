import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduccionComponent } from './produccion/produccion.component';
import { PrincipalComponent } from './principal/principal.component';
import { VentasComponent } from './ventas/ventas.component';



@NgModule({
  declarations: [
    ProduccionComponent,
    PrincipalComponent,
    VentasComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ 
    ProduccionComponent,
    PrincipalComponent,
    VentasComponent,
  ],
})
export class GalletoModule { }
