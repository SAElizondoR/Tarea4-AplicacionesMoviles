import { Component } from '@angular/core';
import { Cita } from '../modelos/cita';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  direccion: string = 'https://thesimpsonsquoteapi.glitch.me/quotes';
  listaCitas: Cita[] = [];

  ngOnInit(): void {
    this.obtenerMultiplesCitas('5');
  }

  async obtenerMultiplesCitas(numero: string): Promise<void> {
    const respuesta: Response = await fetch(`${this.direccion}?count=${numero}`, {
      'method': 'GET'
    });
    this.listaCitas = await respuesta.json();
  }
}
