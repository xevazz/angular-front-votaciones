import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AgregarCandidatosComponent } from "./components/componentsCandidatos/agregar-candidatos/agregar-candidatos.component";
import { InicioComponent } from "./components/componentsInicio/inicio/inicio.component";
import { ListarCandidatosComponent } from "./components/componentsCandidatos/listar-candidatos/listar-candidatos.component";



const routes: Routes = [
  { 
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'candidatos',
    component:ListarCandidatosComponent
  },
  
];

if (sessionStorage.getItem('id')!=null) {
  routes[0] =   { 
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full'
  };
  routes[1] =   { 
    path:'inicio',
    redirectTo: '/inicio',
    pathMatch: 'full'
  };

}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

