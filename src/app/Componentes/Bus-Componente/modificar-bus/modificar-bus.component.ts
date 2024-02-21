import { Component , Input} from '@angular/core';
import { Bus } from '../Entidades/Bus';
import { DbBusService } from '../Service/db-bus.service';

@Component({
  selector: 'app-modificar-bus',
  templateUrl: './modificar-bus.component.html',
  styleUrl: './modificar-bus.component.css'
})
export class ModificarBusComponent {
  @Input() bus: Bus|undefined;

  constructor(private dbser: DbBusService) {}
  @Input() displayStyle = "none";
  
  closePopup() {
    this.bus = undefined
  }

  Update() {
    if (!this.bus) {
      return;
    }

    if (this.bus.Placa.trim().length === 0) {
      return;
    }

    this.dbser.UpdateBus(this.bus.Codigo,this.bus)
    this.bus = undefined;
  }
}
