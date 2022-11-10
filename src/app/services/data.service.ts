import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "../models/user-candidato";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URI= 'http://127.0.0.1:9999/candidato';
  API_URI2= 'https://jsonplaceholder.typicode.com/posts'

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
  actualizar(usuario:User){
    return this.http.put(this.API_URI2,usuario);
  }   

}