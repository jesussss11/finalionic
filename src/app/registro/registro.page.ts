import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel} from '../models/usuario';
import { AuthService } from '../services/auth.service';
import {FormControl, FormGroupDirective,  Validators,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public form: FormGroup;
  usuario: UserModel =new UserModel();
  myForm:FormGroup;
  constructor(private auth: AuthService,
    private router: Router,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuario = new UserModel();
    this.createForm();
  }




  guardarus( form: NgForm ) {
      
    //if ( this.form.invalid ) { return; }
    console.log(this.form)
   this.usuario=this.form.value

    this.auth.nuevoUsuario( this.usuario )
      .subscribe( resp => {
        
        console.log(resp);
       
        console.log("funciona1")
      
        this.usuario.rol="usuario";

        this.router.navigateByUrl('/Login');
console.log("funciona")
      }, (err) => {
        console.log(err.error.error.message);
        
      });
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
