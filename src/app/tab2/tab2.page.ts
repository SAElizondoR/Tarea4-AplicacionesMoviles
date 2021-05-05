import { Component, OnInit } from '@angular/core';
import { Cita } from '../modelos/cita';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  direccion = 'https://thesimpsonsquoteapi.glitch.me/quotes';
  listaCitas: Cita[] = [];
  constructor() {}

  ngOnInit(): void {
    this.obtenerMultiplesCitas('5');
  }

  async obtenerMultiplesCitas(numero: string): Promise<void> {
    const respuesta: Response = await fetch(`${this.direccion}?count=${numero}`, {
      method: 'GET'
    });
    this.listaCitas = await respuesta.json();
  }
}
