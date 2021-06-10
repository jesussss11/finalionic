import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import {Peticionmodel} from '../models/peticion';
@Component({
  selector: 'app-historialus',
  templateUrl: './historialus.page.html',
  styleUrls: ['./historialus.page.scss'],
})
export class HistorialusPage implements OnInit {
  filtre='';
  peticiones: Peticionmodel[]=[];
  cargando =false;
  constructor(public service: ServiceService) {

    this.service.getpeticiones()
    
    .subscribe( resp => {
      console.log(resp)
      this.peticiones = resp;
      this.cargando=true;
    });
   }

  ngOnInit() {
  }

}
