import { Component, Input } from '@angular/core';
import { Bus } from '../Entidades/Bus';
import { DbBusService } from '../Service/db-bus.service';

@Component({
  selector: 'app-insertar-bus',
  templateUrl: './insertar-bus.component.html',
  styleUrl: './insertar-bus.component.css'
})
export class InsertarBusComponent {
  constructor(private dbser: DbBusService)
  {

  }
  @Input() nuevo: Bus = {
    Codigo: 0,
    Placa: '',
    TipoBus: '',
    Revision: '',
    Estado: ''
  };
  @Input() displayStyle = "none";
  
  closePopup() {
    this.displayStyle = "none";
  }
  Insert() 
  {
    console.log(this.nuevo);
    if (this.nuevo.Placa.trim().length === 0) {
      return;
    }
    this.dbser.AddBus(this.nuevo);
    this.nuevo = {
      Codigo: 0,
      Placa: '',
      TipoBus: '',
      Revision: '',
      Estado: ''
    };
  }
}
