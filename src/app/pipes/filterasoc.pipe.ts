import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterasoc'
})
export class FilterasocPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    arg=localStorage.getItem('id');

    const resultPeticionas = [];
    for(const Peticion of value){
      if(Peticion.id_asoc.indexOf(arg)>-1 && Peticion.estado=="Pendiente"){
        resultPeticionas.push(Peticion);
      };
    };
    return resultPeticionas;
  }

}
