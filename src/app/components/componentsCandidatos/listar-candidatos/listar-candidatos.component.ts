import { Component,HostBinding,Inject, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export interface DialogData {
}

@Component({
  selector: 'app-listar-candidatos',
  templateUrl: './listar-candidatos.component.html',
  styleUrls: ['./listar-candidatos.component.css']
})

export class ListarCandidatosComponent implements OnInit {
  @HostBinding('class') clases = "row";
  closeResult = '';
  lista: any;
  id ="1a2b3c";
  constructor(private DataService:DataService, private modalService: NgbModal) { }

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
    this.DataService.listar().subscribe(
      res => {
        this.lista = res;
      },
      err => console.error(err)
    );
  }
  eliminarUsuario(id: string){
    this.DataService.eliminar(id).subscribe(
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
}

