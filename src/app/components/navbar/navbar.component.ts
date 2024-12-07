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

  organizacion() {
    this.router.navigate(['/organizacion']);
  }
  navigateUsers() {
    this.router.navigate(['/usuarios']);
  }

  cuentas(){
  this.router.navigate(['/cuentas']);  
  }


}
