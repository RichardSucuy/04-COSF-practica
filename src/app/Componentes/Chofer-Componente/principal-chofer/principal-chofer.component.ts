import { Component } from '@angular/core';
import { Chofer } from '../Entidades/Chofer';

@Component({
  selector: 'app-principal-chofer',
  templateUrl: './principal-chofer.component.html',
  styleUrl: './principal-chofer.component.css'
})
export class PrincipalChoferComponent {
  showInsertar: boolean = false;
  editar: Chofer|undefined = undefined;

  toggleInsertarForm(){
    this.showInsertar = !this.showInsertar;
    this.editar = undefined;

  }

  cargarEditar(chofer:Chofer){
    this.editar = chofer;
    this.showInsertar = false;
  }
  constructor()
  {
    
  }
}
