import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peticionmodel} from '../models/Peticion';

import { UserModel } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly url_peticion = 'http://localhost:3000/api/peticiones';
  readonly url_user = 'http://localhost:3000/api/usuarios';
 
  
  httpOptions : any    = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  };
  prueba:string = sessionStorage.getItem('access_token');
  peticion : Peticionmodel = new Peticionmodel();
  
  usuario: UserModel = new UserModel();

  constructor( private http: HttpClient ) { }


  crearPeticion( peticion: Peticionmodel ) {
    

    return this.http.post(this.url_peticion+'?token='+this.prueba, peticion,{ headers: new HttpHeaders().set('Authorization', `Bearer ${ this.getToken() }`)});
  }
  
  actualizarpeticion( peticion: Peticionmodel ){
    return this.http.put(this.url_peticion+'?token='+this.prueba, peticion,{ headers: new HttpHeaders().set('Authorization', `Bearer ${ this.getToken() }`)});  }

  borrarpeticion(id: string): Observable<any> {
    return this.http.delete(`${this.url_peticion}/${id}`);
  }


  getpeticion( id: string ) {
    return this.http.get<Peticionmodel>(`${this.url_peticion}/${id}`);
  }


  getpeticiones() {
    return this.http.get(this.url_peticion) 
    .pipe(
      map( this.crearArregloPeticion ),
      delay(0)
    );
  }

  private crearArregloPeticion( peticionesObj: object ) {

    const peticiones: Peticionmodel[] = [];

    Object.keys( peticionesObj ).forEach( key => {

      const peticion: Peticionmodel = peticionesObj[key];

      peticiones.push( peticion );
    });
    return peticiones;

  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

//Usuarios



  crearUsuario( usuario: UserModel ) {
    return this.http.post(this.url_user+'?token='+this.prueba, usuario);
  }
  
  actualizarusuario( usuario: UserModel ){
    return this.http.put(this.url_user+ `/${localStorage.getItem("usmod")}`+'?token='+this.prueba, usuario);  }

  borrarusuario(id: string): Observable<any> {
    return this.http.delete(`${this.url_user}/${id}`);
  }


  getusuario( id: string ) {
    return this.http.get<UserModel>(`${this.url_user}/${id}`);
    
  }


  getusuarios() {
    return this.http.get(this.url_user) 
    .pipe(
      map( this.crearArregloUsuario ),
      delay(0)
    );
  }

  private crearArregloUsuario( usuariosObj: object ) {

    const usuarios: UserModel[] = [];

    Object.keys(usuariosObj ).forEach( key => {

      const usuario: UserModel = usuariosObj[key];

      usuarios.push( usuario );
    });
    return usuarios;

  }

  //Asocicion


 

  


}