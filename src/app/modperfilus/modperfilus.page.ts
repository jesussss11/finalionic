import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../app/services/service.service';
import {UserModel} from '../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-modperfilus',
  templateUrl: './modperfilus.page.html',
  styleUrls: ['./modperfilus.page.scss'],
})
export class ModperfilusPage implements OnInit {

  usuario: UserModel =new UserModel();
  recordarme = false;
  public submitted = false;
  public form: FormGroup;


  constructor(private service : ServiceService,
    private router: Router,public formBuilder: FormBuilder) { }

  ngOnInit() {

    var id=localStorage.getItem("usmod")
    this.service.getusuario(id).subscribe((resp:UserModel) =>{
      var usuario=resp
      usuario.id=id
    }
    
    );
    this.createForm();
  }

  modificar(form:NgForm) {
    console.log(this.form.value,"hola")
    const { ...fields } = this.form.value.values;

   

    Object.assign(this.usuario, fields)

console.log(this.form.value)

    this.usuario.id=localStorage.getItem("usmod")
    this.usuario.email=this.form.value.email
    this.usuario.nombre=this.form.value.nombre
    this.usuario.direccion=this.form.value.direccion
    this.usuario.dni=this.form.value.dni
    this.usuario.telefono=this.form.value.telefono
    this.usuario.password=this.form.value.password
    this.usuario.rol="usuario"
    

   
      this.service.actualizarusuario(this.usuario).subscribe();
      this.router.navigateByUrl("/perfil")
    
  }
  createForm() {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
      nombre:[''],
      dni:[''],
      telefono:[''],
      direccion:[''],
      
    });
  }
}