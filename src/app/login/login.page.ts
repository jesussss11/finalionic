import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { UserModel} from '../models/usuario'

import {FormControl, FormGroupDirective,  Validators,FormGroup, FormBuilder} from '@angular/forms';
import {ServiceService} from'../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  
  usuario: UserModel = new UserModel();
  myForm:FormGroup;
  recordarme = true;
  //usuariolog=JSON.parse(localStorage.getItem("currentUser"))

  
  constructor( private auth: AuthService,private service: ServiceService,
               private router: Router,public formBuilder: FormBuilder ) {  
                 }

  ngOnInit() {

    this.createForm();
    
    if ( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
      
      }


  




      Login(form : NgForm) {
       
    //if (  this.form.invalid ) { return }
var email
var password
var valor;

        valor=this.form.value;
        this.usuario.email=valor.email;
        this.usuario.password=valor.password;
        
    

    this.auth.login( this.usuario.email, this.usuario.password)

      .subscribe( resp => {

        
        
          

        var datos;

        console.log(resp);
       
        this.usuario.id=resp.userId;
       

      this.service.getusuario( this.usuario.id )
      .subscribe( (resp: UserModel) => {
        this.usuario = resp;
        
      });
        
       console.log(this.usuario.preferencias);

       

        setTimeout(() => {
       
        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
          localStorage.setItem('id',this.usuario.id);
          //localStorage.setItem('rol',this.usuario.rol);

          if(this.usuario.rol=="asociacion"){

            this.router.navigateByUrl('/asociacion');
          }else{
            this.router.navigateByUrl('/usuario');
          }
  
        }


      },400);
        
        
        
      

        

    }, (err) => {

        console.log(err.error.error.message);
        
      });
    }
  
  
  
    createForm() {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: [''],
        rol: ['']
      });
    }
  
    get f() {
      return this.form.controls;
    }
  }
  


   