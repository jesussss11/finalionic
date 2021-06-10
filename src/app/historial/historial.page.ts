import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import {Peticionmodel} from '../models/peticion';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
filtre:'';
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
