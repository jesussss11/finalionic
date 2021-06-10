import { Component, OnInit } from '@angular/core';

import {UserModel} from '../../app/models/usuario';
import {ServiceService} from '../../app/services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  Usuarios: UserModel[] = [];
  filterperf:'';
  constructor(public ServicesServices : ServiceService, private router: Router) { }

  ngOnInit() {
    this.ServicesServices.getusuarios()
    
      .subscribe( resp => {
        this.Usuarios = resp;
        
      });
  }


  Modificarperfil(usuario:UserModel,i:number){

    localStorage.setItem("usmod",usuario.id);
     
    this.router.navigateByUrl("/modperfilus")    
  }


  Eliminarcuenta(usuario: UserModel, i: number){
    this.ServicesServices.borrarusuario(usuario.id).subscribe();
    this.router.navigateByUrl("/login");
  }

}
