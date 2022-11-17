import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCandidatosComponent } from './components/componentsCandidatos/listar-candidatos/listar-candidatos.component';
import { AgregarCandidatosComponent } from './components/componentsCandidatos/agregar-candidatos/agregar-candidatos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from "./services/data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/componentsInicio/inicio/inicio.component';
import { NavigationComponent } from './components/componentsNavigation/navigation/navigation.component';
import { ActualizarCandidatosComponent } from './components/componentsCandidatos/actualizar-candidatos/actualizar-candidatos.component';
import { ListarMesasComponent } from './components/componentsMesa/listar-mesas/listar-mesas.component';
import { ListarPartidosComponent } from './components/componentsPartidos/listar-partidos/listar-partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCandidatosComponent,
    AgregarCandidatosComponent,
    InicioComponent,
    NavigationComponent,
    ActualizarCandidatosComponent,
    ListarMesasComponent,
    ListarPartidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
