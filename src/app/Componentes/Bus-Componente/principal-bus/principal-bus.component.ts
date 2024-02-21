import { Component } from '@angular/core';
import { Bus } from '../Entidades/Bus';

@Component({
  selector: 'app-principal-bus',
  templateUrl: './principal-bus.component.html',
  styleUrl: './principal-bus.component.css'
})
export class PrincipalBusComponent {
  showInsertar: boolean = false;
  editar: Bus|undefined = undefined;

  toggleInsertarForm(){
    this.showInsertar = !this.showInsertar;
    this.editar = undefined;

  }

  cargarEditar(bus:Bus){
    this.editar = bus;
    this.showInsertar = false;
  }
  constructor()
  {
    
  }
}
