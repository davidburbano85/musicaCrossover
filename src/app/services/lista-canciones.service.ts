import {Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {
 
  
 
  private localStorageKey = 'listaCanciones';
  getCanciones(): string[] {    
    const songs=localStorage.getItem(this.localStorageKey) as string;
    return JSON.parse(songs) || [];
  }
  agregarCanciones(cancion: string) {
    const canciones = this.getCanciones();  
    canciones.push(cancion)    
    localStorage.setItem(this.localStorageKey, JSON.stringify(canciones))
  }
  eliminarCanciones(index: number) {   
    const canciones = this.getCanciones()
    canciones.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(canciones))

  }


 



}
