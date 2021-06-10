import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../app/services/service.service';
import {UserModel} from '../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-modperfilasoc',
  templateUrl: './modperfilasoc.page.html',
  styleUrls: ['./modperfilasoc.page.scss'],
})
export class ModperfilasocPage implements OnInit {

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
      const { ...fields } = this.form.value.values;
      Object.assign(this.usuario, fields)
    }
    
    );
    this.createForm();
  }
  modificar(form:NgForm) {
    console.log(this.form.value)
    const { ...fields } = this.form.value.values;

   

    Object.assign(this.usuario, fields)

console.log(this.form.value)

    this.usuario.id=localStorage.getItem("usmod")

    if(this.form.value.email!= ""){
       this.usuario.email=this.form.value.email
    }else{
      this.usuario.email=this.usuario.email
    }
    if(this.form.value.nombre!= ""){
      this.usuario.nombre=this.form.value.nombre
    }else{
      this.usuario.nombre=this.usuario.nombre
    }
    if(this.form.value.direccion!= ""){
      this.usuario.direccion=this.form.value.direccion
    }else{
      this.usuario.direccion=this.usuario.direccion
    }
    if(this.form.value.cif!= ""){
      this.usuario.cif=this.form.value.cif
    }else{
      this.usuario.cif=this.usuario.cif
    }
    if(this.form.value.telefono!= ""){
      this.usuario.telefono=this.form.value.telefono
    }else{
      this.usuario.telefono=this.usuario.telefono
    }
    if(this.form.value.password!= ""){
      this.usuario.password=this.form.value.password
    }else{
      this.usuario.password=this.usuario.password
    }
    if(this.form.value.preferencias!= ""){
      this.usuario.preferencias=this.form.value.preferencias
    }else{
      this.usuario.preferencias=this.usuario.preferencias
    }
    
    
    
    
    
    
    this.usuario.rol="asociacion"
    

   
      this.service.actualizarusuario(this.usuario).subscribe();
      this.router.navigateByUrl("/perfil")
    
  }
  createForm() {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
      nombre:[''],
      cif:[''],
      telefono:[''],
      direccion:[''],
      preferencias:[''],
      
    });
  }
}

