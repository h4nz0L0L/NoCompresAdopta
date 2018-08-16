import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './registro/registro.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { ExtravioComponent } from './extravio/extravio.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { AltaComponent } from './alta/alta.component';

const routes: Routes = [
  {
    path: 'registro', 
    component: RegistroComponent 
  },
  {
    path: 'about', 
    component: AboutComponent 
  },
  {
    path: 'contacto', 
    component: ContactoComponent 
  },
  {
    path: 'eventos', 
    component: EventosComponent 
  },
  {
    path: 'extravio', 
    component: ExtravioComponent 
  },
  {
    path: 'extravio', 
    component: ExtravioComponent 
  },
  {
    path: 'adopcion', 
    component: AdopcionComponent 
  },
  {
    path: 'alta', 
    component: AltaComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }


