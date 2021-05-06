import { Component, Input } from '@angular/core';
import { Cita } from '../modelos/cita';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.scss'],
})
export class PersonajeDetalleComponent {

  @Input() cita: Cita;

  constructor() {}

}
