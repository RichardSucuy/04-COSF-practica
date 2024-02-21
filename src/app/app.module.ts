import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarChoferComponent } from './Componentes/Chofer-Componente/listar-chofer/listar-chofer.component';
import { InsertarChoferComponent } from './Componentes/Chofer-Componente/insertar-chofer/insertar-chofer.component';
import { ModificarChoferComponent } from './Componentes/Chofer-Componente/modificar-chofer/modificar-chofer.component';
import { PrincipalChoferComponent } from './Componentes/Chofer-Componente/principal-chofer/principal-chofer.component';
import { FormsModule } from '@angular/forms';
import { InsertarBusComponent } from './Componentes/Bus-Componente/insertar-bus/insertar-bus.component';
import { ListarBusComponent } from './Componentes/Bus-Componente/listar-bus/listar-bus.component';
import { ModificarBusComponent } from './Componentes/Bus-Componente/modificar-bus/modificar-bus.component';
import { PrincipalBusComponent } from './Componentes/Bus-Componente/principal-bus/principal-bus.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarChoferComponent,
    InsertarChoferComponent,
    ModificarChoferComponent,
    PrincipalChoferComponent,
    InsertarBusComponent,
    ListarBusComponent,
    ModificarBusComponent,
    PrincipalBusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
