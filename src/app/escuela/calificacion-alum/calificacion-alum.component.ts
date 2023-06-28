import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})

export class CalificacionAlumComponent {
  @Input() 
  calificacion!:number;
  starWidth!:number;

  ngOnChange():void{
    this.starWidth = this.calificacion*76/10;
  }
}
