import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../service/httpClient.service';

/**Clase principal de la aplicacion */
@Component({
  selector: 'app-turnos-page',
  templateUrl: './turnos-page.component.html',
  styleUrls: ['./turnos-page.component.css']
})
export class TurnosPageComponent implements OnInit {

  files: any;
  validationError = false;

  comercios: any[] = [];
  servicios: any[] = [];
  turnos: any[] = [];


  selectedComercio:any;
  selectedServicio:any;


  fechaInicio:Date = new Date();
  fechaFin:Date = new Date();


  horaInicio:Date = new Date();
  horaFin:Date = new Date();



  constructor(
    private _httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this._httpClientService.getComercios().subscribe(comercios =>  this.comercios = comercios)
  }

  onChangeComercios(value:any){
    const comercio = this.comercios.find(comercio => comercio.idComercio = value);
    this.servicios = comercio.servicios;
    this.selectedComercio = comercio.nombreComercio;
  }

  onChangeServicios(value:any){
    this.selectedServicio = value;
  }

  createTurnos(){
    console.log(this.selectedServicio);
    this._httpClientService.createTurnos(
      {
        fechaInicio:new Date(this.fechaInicio),
        fechaFin:new Date(this.fechaFin),
        idServicio: this.selectedServicio
      }).subscribe(turnos => {this.turnos = turnos},
        error => {
          console.error('Error al generar los turnos', error);
        });

  }

}
