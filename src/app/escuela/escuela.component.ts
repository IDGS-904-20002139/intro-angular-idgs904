import { Component } from '@angular/core';

@Component({
  selector: 'app-escuela',
  template:`
      <form>
        <label>Nombre:</label>
        <br>
        <input type="text" name="txtNombre" id="txtNombre">
        <br>
        <button class="btn btn-primary" type="button">Ingresar</button>
      </form>`
})
export class EscuelaComponent {
  constructor(){}
}
