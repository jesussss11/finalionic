import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { AlertController,NavController } from '@ionic/angular';
import { UserModel} from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
pipes:'';
pipitas:'';
  Usuarios: UserModel[] = [];
cargando =false;
usuarioasoc: UserModel = new UserModel();

  constructor(public servicesService : ServiceService, private router: Router) {
    this.servicesService.getusuarios()
    
    .subscribe( resp => {
      console.log(resp)
      this.Usuarios = resp;
      this.cargando=true;
    });
   }

  ngOnInit() {
   
  }


  realizarDonacion(usuario :UserModel, i:number){

    var id_asoc;
    var id_user;
    var nombre_asoc;
    var nombre_user;


    console.log(usuario);
    

    id_asoc=usuario.id;
    nombre_asoc=usuario.nombre;
    
        this.servicesService.getusuario( usuario.id ).subscribe(( resp => {
        this.usuarioasoc= resp;
        console.log(this.usuarioasoc.nombre)
        this.router.navigateByUrl("/donacion");
      }))



      localStorage.setItem('idasoc',usuario.id);
    

    };

}
