import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrous'
})
export class FiltrousPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    arg=localStorage.getItem('id');

    const resultusuario = [];
    for(const usuario of value){
      if(usuario.id.indexOf(arg)>-1){
        resultusuario.push(usuario);
      };
    };
    return resultusuario;
  }

}
