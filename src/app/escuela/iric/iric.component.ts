import { Component } from '@angular/core';
import { IAlumno } from '../AlumnoIr';
@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  imagenWidth: number=50;
  imagenMargin: number=2;
  muestraImg: boolean= true;
  listFilter: string='';

  alumnosIric:IAlumno[]=[
    {
      "matricula":1234,
      "nombre":'Mario',
      "edad":23,
      "correo":'mario@email.com',
      "pago":129.42,
      "foto":"https://th.bing.com/th/id/OIP.il-mL4Es0JiLttAEsdH0jAHaHa?pid=ImgDet&rs=1",
      "cali":8
    },{
      "matricula":5678,
      "nombre":'Oscar',
      "edad":25,
      "correo":'oscar@email.com',
      "pago":148.454,
      "foto":"https://th.bing.com/th/id/OIP.SyUtGJLzShCsBYda3pFyBAHaHa?pid=ImgDet&rs=1",
      "cali":6
    },{
      "matricula":9012,
      "nombre":'Paula',
      "edad":21,
      "correo":'pau@email.com',
      "pago":33.55,
      "foto":"https://th.bing.com/th/id/OIP.HMPa8NSZAEl5wIVCQi94jAHaHa?pid=ImgDet&rs=1",
      "cali":9
    },
  ]

  showImagen():void{
    this.muestraImg=!this.muestraImg;
  }
}
