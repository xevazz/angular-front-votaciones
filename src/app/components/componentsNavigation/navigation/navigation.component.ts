import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  respuesta:any ='correo';
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  traerEmail(id: string){
    this.dataService.nav(id).subscribe(
      res => {
        this.respuesta = res;
      },
      err => console.error(err)
    )
  }
  logout(){
    sessionStorage.clear();
    window.location.reload();
  }

}
