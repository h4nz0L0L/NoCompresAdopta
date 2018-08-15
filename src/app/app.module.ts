import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { ExtravioComponent } from './extravio/extravio.component';
import { EventosComponent } from './eventos/eventos.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './/app-routing.module';
import { PerroComponent } from './perro/perro.component';
import { GatoComponent } from './gato/gato.component';
import { SliderComponent } from './slider/slider.component';
import { PruebaComponent } from './prueba/prueba.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    RegistroComponent,
    AdopcionComponent,
    ExtravioComponent,
    EventosComponent,
    AboutComponent,
    ContactoComponent,
    PerroComponent,
    GatoComponent,
    SliderComponent,
    PruebaComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
