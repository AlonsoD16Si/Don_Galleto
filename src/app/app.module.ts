import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalletoModule } from './modules/galleto.module';
import { CocinaComponent } from './modules/cocina/cocina.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GalletoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
