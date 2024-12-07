import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modules/principal/principal.component';
import { VentasComponent } from './modules/ventas/ventas.component';
import { ProduccionComponent } from './modules/produccion/produccion.component';
import { CocinaComponent } from './modules/cocina/cocina.component';

const routes: Routes = [

  {path:'principal', component:  PrincipalComponent },
  {path: 'ventas', component: VentasComponent},
  {path: 'produccion', component: CocinaComponent},
  {path: '', redirectTo: '/principal', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
