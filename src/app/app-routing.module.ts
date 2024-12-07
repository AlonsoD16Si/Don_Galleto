import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modules/principal/principal.component';
import { VentasComponent } from './modules/ventas/ventas.component';

const routes: Routes = [

  {path:'principal', component:  PrincipalComponent },
  {path: 'ventas', component: VentasComponent},
  {path: '', redirectTo: '/principal', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
