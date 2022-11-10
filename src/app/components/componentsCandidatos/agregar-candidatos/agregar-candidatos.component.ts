import { Component,HostBinding, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service";
import { User } from "../../../models/user-candidato";

@Component({
  selector: 'app-agregar-candidatos',
  templateUrl: './agregar-candidatos.component.html',
  styleUrls: ['./agregar-candidatos.component.css']
})
export class AgregarCandidatosComponent implements OnInit {
  @HostBinding('class') clases = "row";

  user: User = {
    _id:0,
    apellido:'',
    cedula:0,
    nombre:'',
    resolucion:''
  };
  constructor(private dataService:DataService) { }
  public bool: any;
  ngOnInit(): void {
  }
  
  guardarNuevoUsuario(){
    delete this.user._id;
    this.dataService.crearNuevo(this.user).subscribe(
      res=> {
        console.log(res);
        this.bool=false;

      },
      err=> console.error(err)
    )
  }


}
