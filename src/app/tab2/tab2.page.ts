import { Component } from '@angular/core';
import { Cita } from './../modelos/cita';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
    direccion: string = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    citaPersonaje:Cita={} as Cita;




  ngOnInit(): void {
    this.obtenerUnaCita();

  }
  
  async obtenerUnaCita(): Promise<void> {
    const respuesta: Response = await fetch(this.direccion, {
      'method': 'GET'
    });
    const datos: Cita[] = await respuesta.json();
    this.citaPersonaje = datos[0];
  }
}
