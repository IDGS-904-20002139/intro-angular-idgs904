import { Pipe, PipeTransform } from '@angular/core';
import { IAlumno } from './AlumnoIr';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: IAlumno[], args: string): IAlumno[] {
    let filter: string = args ? args.toLocaleLowerCase():'';

    return filter? value.filter((alumno:IAlumno) =>
    alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1
    ):value;
  }

}
