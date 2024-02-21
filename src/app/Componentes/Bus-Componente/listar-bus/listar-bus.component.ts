import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bus } from '../Entidades/Bus';
import { DbBusService } from '../Service/db-bus.service';


@Component({
  selector: 'app-listar-bus',
  templateUrl: './listar-bus.component.html',
  styleUrl: './listar-bus.component.css'
})
export class ListarBusComponent {

  @Output() editarClienteEvent = new EventEmitter<Bus>();
  get ListaBus() 
  {
    return this.obs.getListaBus;
  }
  EditarBus(bus:Bus)
  {
    this.editarClienteEvent.emit(bus);
  }
  EliminarBus(bus:Bus)
  {
    this.obs.DeleteBus(bus.Codigo);
  }

    constructor(private obs:DbBusService)
    {

    }
    ngOnInit():void{
        

    }
}
