import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent implements OnInit {
  date: number = Date.now();

  ngOnInit(): void {
  }
  constructor(private router: Router) {}

  ventas() {
    this.router.navigate(['/ventas']);
  }
  
}
