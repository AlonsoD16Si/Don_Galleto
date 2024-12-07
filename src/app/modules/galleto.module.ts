import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduccionComponent } from './produccion/produccion.component';
import { PrincipalComponent } from './principal/principal.component';
import { VentasComponent } from './ventas/ventas.component';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    ProduccionComponent,
    PrincipalComponent,
    VentasComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    CardModule,
    InputTextModule
  ],
  exports: [ 
    ProduccionComponent,
    PrincipalComponent,
    VentasComponent,
  ],
})
export class GalletoModule { }
