import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipus'
})
export class PipusPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    
   

    const resultusuarioo = [];
    for(const usuario of value){
      if(usuario.preferencias==arg){
        resultusuarioo.push(usuario);
      };
    };
    return resultusuarioo;
  }

}
