import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ExtravioComponent } from './extravio/extravio.component';
import { EventoComponent } from './evento/evento.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    ExtravioComponent,
    EventoComponent,
    ContactoComponent,
    AdopcionComponent,
    AboutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
