import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel} from '../models/usuario';
import { AuthService } from '../services/auth.service';
import {FormControl, FormGroupDirective,  Validators,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registroasoc',
  templateUrl: './registroasoc.page.html',
  styleUrls: ['./registroasoc.page.scss'],
})
export class RegistroasocPage implements OnInit {
  myForm:FormGroup;

  public form: FormGroup;
  usuario: UserModel =new UserModel();

  constructor(private auth: AuthService,
    private router: Router,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuario = new UserModel();
    this.createForm();
  }



  guardarasoc( form: NgForm ) {
      
    //if ( form.invalid ) { return; }
    
    console.log(this.form)
    this.usuario=this.form.value

    this.auth.nuevAsoc( this.usuario )
      .subscribe( resp => {
        
        console.log(resp);
       
        console.log("funciona1")
      
        this.usuario.rol="asociacion";

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
      cif:[''],
      telefono:[''],
      direccion:[''],
      preferencias:[''],
      
    });
  }

}
