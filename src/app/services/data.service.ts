import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "../models/user-candidato";
import { Partidos } from '../models/user-partidos';
import { Mesas } from '../models/User-mesas';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URI= 'http://127.0.0.1:9999/candidato';
  API_URI2= 'http://127.0.0.1:9999/partidos';
  API_URI3= 'http://127.0.0.1:9999/mesas';

  constructor(private http:HttpClient) { }

  login(correo: string, password: string){
    return this.http.get(this.API_URI+'login'+correo+password);
  }
  nav(id: string){
    return this.http.get(this.API_URI+id);
  }  
  listar(){
    return this.http.get(this.API_URI);
  }  
  crearNuevo(usuario:User){
    return this.http.post(this.API_URI,usuario);
  }
  eliminar(id: string){
    return this.http.delete(this.API_URI+'/'+id);
  }
  actualizar(id: string, usuario:User){
    return this.http.put(this.API_URI+'/'+id,usuario);
  } 
  
  
  listarPartidos(){
    return this.http.get(this.API_URI2);
  }  
  crearNuevoPartidos(partidos:Partidos){
    return this.http.post(this.API_URI2,partidos);
  }
  eliminarPartidos(id: string){
    return this.http.delete(this.API_URI2+'/'+id);
  }
  actualizarPartidos(id: string, partidos:Partidos){
    return this.http.put(this.API_URI2+'/'+id,partidos);
  }   


  listarMesas(){
    return this.http.get(this.API_URI3);
  }  
  crearNuevoMesas(mesas:Mesas){
    return this.http.post(this.API_URI3,mesas);
  }
  eliminarMesas(id: string){
    return this.http.delete(this.API_URI3+'/'+id);
  }
  actualizarMesas(id: string, mesas:Mesas){
    return this.http.put(this.API_URI3+'/'+id,mesas);
  }   


}