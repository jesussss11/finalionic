import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import {Peticionmodel} from '../models/peticion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.page.html',
  styleUrls: ['./asociacion.page.scss'],
})
export class AsociacionPage implements OnInit {
  peticiones: Peticionmodel[]=[];
  cargando =false;
  filter:'';

  constructor(public service: ServiceService,private router: Router) {

    this.service.getpeticiones()
    
    .subscribe( resp => {
      console.log(resp)
      this.peticiones = resp;
      this.cargando=true;
    });
   }

  ngOnInit() {
  }


  aceptarDonacion(peticion : Peticionmodel, i:number){

    var id_peticion =peticion.id;
    var peticionacep;


    console.log(peticion);

  this.service.getpeticion( peticion.id ).subscribe(( resp => {
        peticionacep= resp;
        console.log(peticionacep)
        peticionacep.estado="aceptada";

        this.service.actualizarpeticion(peticionacep).subscribe();
        
        
        location.reload();
  }))

      
  }
  
  
  rechazarDonacion(peticion:Peticionmodel, i : number) {
    var id_peticion =peticion.id;
    var peticionrecha;


    console.log(peticion);

  this.service.getpeticion( peticion.id ).subscribe(( resp => {
        peticionrecha= resp;
        console.log(peticionrecha)
        peticionrecha.estado="rechazada";

        this.service.actualizarpeticion(peticionrecha).subscribe();
        
        this.service.getpeticiones().subscribe();
        location.reload();


      }))
      }
}
