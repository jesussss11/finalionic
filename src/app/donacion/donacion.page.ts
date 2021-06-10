import { Component, OnInit } from '@angular/core';
import { UserModel} from '../models/usuario';
import {FormControl, FormGroupDirective,  Validators,FormGroup, FormBuilder} from '@angular/forms';
import { Peticionmodel } from 'src/app/models/Peticion';
import {ServiceService} from '../services/service.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.page.html',
  styleUrls: ['./donacion.page.scss'],
})
export class DonacionPage implements OnInit {
  
  usuario: UserModel = new UserModel();
  peticion: Peticionmodel= new Peticionmodel();
  peticiones: Peticionmodel[] = [];

form= new FormGroup({
descripcion: new FormControl
});


  constructor(private ServicesServices: ServiceService,
    private router: Router,public formBuilder: FormBuilder) { }

  ngOnInit() {
  }



  donar(form : NgForm){
    var valor;

    
    console.log(this.form);

    var id_asoc;
    var id_user;
    
    var nombre_asoc;
    var nombre_user;
   var usuarioasoc  = new UserModel(); 
    var usuarioin = new UserModel();
  
    id_asoc=localStorage.getItem('idasoc')
   id_user=localStorage.getItem('id')
   console.log(id_asoc)
   console.log(id_user)
  
   this.ServicesServices.getusuario( id_asoc ).subscribe(( resp => {
      usuarioasoc= resp;
    console.log(usuarioasoc)
  }))
  
  
  this.ServicesServices.getusuario( id_user ).subscribe(( resp => {
    usuarioin= resp;
    console.log(usuarioin)
  }))
  
  setTimeout(()=>{
  
  
  console.log("hola")
  
  this.peticion.id_asoc=usuarioasoc.id;
  this.peticion.id_user=usuarioin.id;
  this.peticion.nombre_asoc= usuarioasoc.nombre;
  this.peticion.nombre_user= usuarioin.nombre;
  this.peticion.descripcion=this.form.value.descripcion;
  this.peticion.estado="Pendiente"
  
   console.log("thispeticion",this.peticion)
  this.ServicesServices.crearPeticion(this.peticion).subscribe();
  this.router.navigateByUrl('/usuario');
  },400)
  }

  createForm() {
    this.form = this.formBuilder.group({
      
      descripcion:[''],
      
    });
  }


}
