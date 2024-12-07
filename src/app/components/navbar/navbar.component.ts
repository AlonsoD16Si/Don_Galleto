import { Component, OnInit } from '@angular/core';
// import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { environment} from '../../../environments/environment'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  public rutaImagen: string = environment.assets;

  ngOnInit() {
  }
  constructor(private router: Router) {}

  principal(){
    this.router.navigate(['/principal'])
  }

  ventas() {
    this.router.navigate(['/ventas']);
  }
  produccion() {
    this.router.navigate(['/produccion']);
  }

  cuentas(){
  this.router.navigate(['/cuentas']);  
  }


}
