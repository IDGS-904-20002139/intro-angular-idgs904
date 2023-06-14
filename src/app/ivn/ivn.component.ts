import { Component } from '@angular/core';

@Component({
  selector: 'app-ivn',
  template:`
      <div>
      <b>Matricula:</b> {{Alumnos.matricula}}
    </div>
    <div>
      <b>Nombre:</b> {{Alumnos.nombre}}
    </div>
    <div>
      <b>Fecha:</b> {{Alumnos.fechaNacimiento | date:'dd/MM/yyyy'}}
    </div> 
    <div>
      <b>Pago:</b> {{Alumnos.pagoIns | currency}}
    </div>`
})
export class IvnComponent {
    Alumnos = {
        matricula:1234,
        nombre: 'Angel',
        fechaNacimiento: new Date() ,
        pagoIns: 2759.23
      };
}