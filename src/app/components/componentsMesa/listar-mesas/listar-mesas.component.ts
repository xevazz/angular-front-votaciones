import { Component, OnInit,HostBinding } from '@angular/core';
import { Mesas } from 'src/app/models/User-mesas';
import { DataService } from "../../../services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Partidos } from "../../../models/user-partidos";


@Component({
  selector: 'app-listar-mesas',
  templateUrl: './listar-mesas.component.html',
  styleUrls: ['./listar-mesas.component.css']
})
export class ListarMesasComponent implements OnInit {

  @HostBinding('class') clases = "row";
  

  user : Mesas = {
    _id:0,
    cedula:0,
    partido : {_id:0, nombre:"",lema:""},
  };
  user2: Partidos = {
    _id:0,
    nombre:'',
    lema:'',
  };
  closeResult = '';
  lista: any;
  lista2: any;
  idPartido="";

  id ="1a2b3c";
  constructor(private DataService:DataService, private modalService: NgbModal) { }
  public bool: any;
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    this.getLista();
    this.getLista2();
  }

  guardarIdPartido(id: string){
    this.idPartido=id;
  }

  getLista(){
    this.DataService.listarMesas().subscribe(
      res => {
        this.lista = res;
      },
      err => console.error(err)
    );
  }
  eliminarUsuario(id: string){
    this.DataService.eliminarMesas(id).subscribe(
      res=>{
        console.log(res),
        this.getLista()
      },
      err=>console.error(err)
    )
  }
  guardarId(ide: string){
    this.id=ide;
  }
  guardarNuevoUsuario(){
    delete this.user._id;
    this.DataService.crearNuevoMesas(this.user).subscribe(
      res=> {
        console.log(res);
        this.bool=false;

      },
      err=> console.error(err)
    )
    location.reload();
  }
  actualizarUsuario(id: string){

    delete this.user._id;
    this.DataService.actualizarMesas(id,this.user).subscribe(
      res=> {
        console.log(res);
      },
      err=> console.error(err)
    )
    location.reload();
  }  

  getLista2(){
    this.DataService.listarPartidos().subscribe(
      res => {
        this.lista2 = res;
        
      },
      err => console.error(err)
    );
  }
}



