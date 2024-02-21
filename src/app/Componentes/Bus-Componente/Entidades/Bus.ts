export class Bus {
    Codigo: number;
    Placa: string;
    TipoBus: string;
    Revision: string; //Descripcion de revision
    Estado: string; //Si se encuentra o no en mantenimiento
    
  
    constructor(codigo: number, placa: string, tipoBus: string, revision: string, estado: string) {
      this.Codigo = codigo;
      this.Placa = placa;
      this.TipoBus = tipoBus;
      this.Revision = revision;
      this.Estado = estado;
  }
}
