import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduccionComponent } from './modules/produccion/produccion.component'; // Ajusta la ruta según tu estructura
import { PrincipalComponent } from './modules/principal/principal.component'; // Por ejemplo, tu pantalla principal

const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Ruta principal (vacía)
  { path: 'produccion', component: ProduccionComponent }, // Ruta para Producción
  { path: '**', redirectTo: '' } // Ruta por defecto para rutas no válidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
