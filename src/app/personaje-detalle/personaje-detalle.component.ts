import { Component, OnInit } from '@angular/core';
import { Cita } from '../modelos/cita';
import { CitasService } from '../servicios/citas.service';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.scss'],
})
export class PersonajeDetalleComponent implements OnInit {

  citaActual: Cita = {} as Cita;
  constructor(private servicioCitas: CitasService) {}

  async ngOnInit(): Promise<void> {
    this.citaActual = await this.servicioCitas.obtenerUnaCita();
  }

}
