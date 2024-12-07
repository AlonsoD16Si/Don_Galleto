import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduccionComponent } from './modules/produccion/produccion.component'; // Ajusta la ruta según tu estructura
import { PrincipalComponent } from './modules/principal/principal.component'; // Por ejemplo, tu pantalla principal
import { CocinaComponent } from './modules/cocina/cocina.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'cocina', component: CocinaComponent }, // Ruta principal (vacía)
  { path: 'produccion', component: ProduccionComponent }, // Ruta para Producción
  { path: '**', redirectTo: '' } // Ruta por defecto para rutas no válidas // Ruta para Producción
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
