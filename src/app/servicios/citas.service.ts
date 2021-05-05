import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cita } from '../modelos/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor() { }

  async obtenerUnaCita(): Promise<Cita> {
    const respuesta: Response = await fetch(environment.direccionSimpsons, {
      method: 'GET'
    });
    return respuesta.json();
  }

  async obtenerMultiplesCitas(numero: string): Promise<Cita[]> {
    const respuesta: Response = await fetch(`${environment.direccionSimpsons}?count=${numero}`, {
      method: 'GET'
    });
    return respuesta.json();
  }
}
