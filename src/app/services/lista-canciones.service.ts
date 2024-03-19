import { HttpClient } from '@angular/common/http';
import {Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { generalResponse } from '../models/generalResponse.model';
import { Videos } from '../models/videos.model';


@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {
  private apikey="AIzaSyCBU5LZwG-J_kyI3xdwyw3-bz2oGLYYn8E"

  enviarKey(){
    return this.apikey
   }
  constructor(private http:HttpClient){}
  // private http= Inject(HttpClient)
  ObtenerCanciones():Observable<generalResponse<Videos>>{
    return this.http.get<generalResponse<Videos>>("https://localhost:7172/api/Canciones").pipe(
      map( cancion=>{return cancion} )
    )
    
  }
  AgregarCancion(nuevaCancion: Videos): Observable<generalResponse<Videos>> {
    return this.http.post<generalResponse<Videos>>("https://localhost:7172/api/Canciones", nuevaCancion );
      
  
  }
  // private localStorageKey = 'listaCanciones';
  // getCanciones(): string[] {    
  //   const songs=localStorage.getItem(this.localStorageKey) as string;
  //   return JSON.parse(songs) || [];
  // }
  // agregarCanciones(cancion: string) {
  //   const canciones = this.getCanciones();  
  //   canciones.push(cancion)    
  //   localStorage.setItem(this.localStorageKey, JSON.stringify(canciones))
  // }
  // eliminarCanciones(index: number) {   
  //   const canciones = this.getCanciones()
  //   canciones.splice(index, 1);
  //   localStorage.setItem(this.localStorageKey, JSON.stringify(canciones))

  // }


 



}
