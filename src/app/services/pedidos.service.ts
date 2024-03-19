import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { generalResponse } from '../models/generalResponse.model';
import { pedidos } from '../models/pedidos.model';
import { password } from '../models/password.model';
import { Videos } from '../models/videos.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  
  constructor(private http: HttpClient) { }

  obtenerPedidos():Observable<generalResponse<pedidos>>{

    return this.http.get<generalResponse<pedidos>>("https://localhost:7172/api/Pedido").pipe(
      map(res =>{return res})
    );

  }
  obtenerConsumo():Observable<generalResponse<pedidos>>{
    return this.http.get<generalResponse<pedidos>>("https://localhost:7172/api/Consumo").pipe(
      map(consu=>{return consu})
    )
  }

  ObtenerPassword():Observable<generalResponse<password>>{
    return this.http.get<generalResponse<password>>("https://localhost:7172/api/Password").pipe(
      map(pass=>{return pass})
    )

  }
 


 

}
