import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createTurnos({ fechaInicio, fechaFin, idServicio }: { fechaInicio: Date, fechaFin: Date, idServicio: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/turnos`, { fechaInicio, fechaFin, idServicio });
  }



  getComercios():Observable<any> {
    return this.http.get(`${this.baseUrl}/comercios`);
  }

  getTurnos() {
    return this.http.get(`${this.baseUrl}/turnos`);
  }



}
