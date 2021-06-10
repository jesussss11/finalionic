import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    arg=localStorage.getItem('id');

    const resultPeticion = [];
    for(const peticion of value){
      if(peticion.id_user.indexOf(arg)>-1){
        resultPeticion.push(peticion);
      };
    };
    return resultPeticion;
  }

}
