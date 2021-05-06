import { Component, OnInit } from '@angular/core';
import { Cita } from '../modelos/cita';
import { CitasService } from '../servicios/citas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  cita: Cita;

  constructor(private servicioCitas: CitasService) {}

  async ngOnInit(): Promise<void> {
    const resultado: Cita[] = await this.servicioCitas.obtenerUnaCita();
    this.cita = resultado[0];
  }

}
