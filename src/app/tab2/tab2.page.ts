import { CitasService } from '../servicios/citas.service';
import { Component, OnInit } from '@angular/core';
import { Cita } from '../modelos/cita';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  listaCitas: Cita[] = [];
  constructor(private servicioCitas: CitasService) {}

  async ngOnInit(): Promise<void> {
    this.listaCitas = await this.servicioCitas.obtenerMultiplesCitas('5');
  }

}
