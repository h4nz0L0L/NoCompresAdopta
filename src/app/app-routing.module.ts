import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';              
// Habrá que importar el componente que será servido para cada ruta
import { RegistroComponent } from './registro/registro.component'
import { AdopcionComponent } from './adopcion/adopcion.component'
import { ExtravioComponent } from './extravio/extravio.component'
import { EventoComponent } from './evento/evento.component'
import { ContactoComponent } from './contacto/contacto.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  {
    path: 'registro', // ruta raíz
    component: RegistroComponent
  },
  {
    path: 'adopcion', // ruta raíz
    component: AdopcionComponent
  },
  {
    path: 'extravio', // ruta raíz
    component: ExtravioComponent
  },
  {
    path: 'evento', // ruta raíz
    component: EventoComponent
  },
  {
    path: 'contacto', // ruta raíz
    component: ContactoComponent
  },
  {
    path: 'about', // ruta raíz
    component: AboutComponent
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}