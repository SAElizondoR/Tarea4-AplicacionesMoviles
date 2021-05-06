import { CitasService } from '../servicios/citas.service';
import { Component, OnInit } from '@angular/core';
import { Cita } from '../modelos/cita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  citaActual: Cita;
  modoTabla = true;
  listaCitas: Cita[] = [];
  constructor(
    private servicioCitas: CitasService,
    private enrutador: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.listaCitas = await this.servicioCitas.obtenerMultiplesCitas('5');
  }

  irAEnlace(ruta: string) {
    this.enrutador.navigateByUrl(ruta);
  }

  cambiarModo() {
    this.modoTabla = !this.modoTabla;
  }

  alSeleccionarCita(cita: Cita) {
    this.citaActual = cita;
    this.cambiarModo();
  }

}
