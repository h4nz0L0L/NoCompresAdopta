import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { ExtravioComponent } from './extravio/extravio.component';
import { AdopcionComponent } from './adopcion/adopcion.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }


