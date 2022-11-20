import { Component, OnInit,HostBinding} from '@angular/core';
import { DataService } from "../../../services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Partidos } from "../../../models/user-partidos";

export interface DialogData {
}

@Component({
  selector: 'app-listar-partidos',
  templateUrl: './listar-partidos.component.html',
  styleUrls: ['./listar-partidos.component.css']
})
export class ListarPartidosComponent implements OnInit {

  @HostBinding('class') clases = "row";
  user: Partidos = {
    _id:0,
    nombre:'',
    lema:'',
  };
  closeResult = '';
  lista: any;
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
  }

  getLista(){
    this.DataService.listarPartidos().subscribe(
      res => {
        this.lista = res;
      },
      err => console.error(err)
    );
  }
  eliminarUsuario(id: string){
    this.DataService.eliminarPartidos(id).subscribe(
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
    this.DataService.crearNuevoPartidos(this.user).subscribe(
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
    this.DataService.actualizarPartidos(id,this.user).subscribe(
      res=> {
        console.log(res);
      },
      err=> console.error(err)
    )
    location.reload();
  }  
}

