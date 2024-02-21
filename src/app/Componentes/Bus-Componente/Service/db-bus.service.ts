import { EventEmitter, Injectable, Output } from '@angular/core';
import { Bus } from '../Entidades/Bus';

@Injectable({
  providedIn: 'root'
})
export class DbBusService {

  constructor() { }
  private ListaBuses: Bus[] = [
    {
      Codigo: 1,
      Placa: 'JUN543',
      TipoBus: 'COMERCIAL',
      Revision: 'Ninguna novedad', //Descripcion de revision
      Estado: 'Aprobado' //Si se encuentra o no en mantenimiento
    },
    {
      Codigo: 2,
      Placa: 'AUG294',
      TipoBus: 'PRIVADO',
      Revision: 'Lateria en estado regular', //Descripcion de revision
      Estado: 'Aprobado'
    }];
  
   get getListaBus():Bus[]
    {
      return this.ListaBuses;
    }
    AddBus(bus:Bus)
  {
    this.ListaBuses.push(bus);
  }
  UpdateBus(id:number, bus:Bus)
  {
    const index = this.ListaBuses.findIndex(bus=>bus.Codigo === id);
    if(index !==-1)
    {
      this.ListaBuses[index]=bus;
    }
  }
  DeleteBus(id:number )
  {
    const index = this.ListaBuses.findIndex(bus=>bus.Codigo === id);
    if(index !==-1)
    {
      this.ListaBuses.splice(index, 1);
    }
  }
}
