import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduccionComponent } from './produccion/produccion.component';
import { PrincipalComponent } from './principal/principal.component';
import { VentasComponent } from './ventas/ventas.component';
import { CocinaComponent } from './cocina/cocina.component';



@NgModule({
  declarations: [
    ProduccionComponent,
    PrincipalComponent,
    VentasComponent,
    CocinaComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ 
    ProduccionComponent,
    PrincipalComponent,
    VentasComponent,
    CocinaComponent
  ],
})
export class GalletoModule { }
