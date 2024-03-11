import { Component, EventEmitter, Input, OnInit, Output, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaCancionesService } from '../services/lista-canciones.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { VideosytComponent } from '../videosyt/videosyt.component';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-miscanciones',
  standalone: true,
  templateUrl: './miscanciones.component.html',
  styleUrl: './miscanciones.component.css',
  imports: [FormsModule, CommonModule, RouterModule, RouterLink, HeaderComponent, YouTubePlayer, VideosytComponent]
})
export class MiscancionesComponent implements OnInit {

  listaCanciones: string[] = [];
  nuevaCancion: string = '';
  conteo:number=0;
  private _cancionesService = inject(ListaCancionesService)
  ngOnInit(): void {
    this.listaCanciones = this._cancionesService.getCanciones();
  }
  agregarCancion() {
    this._cancionesService.agregarCanciones(this.nuevaCancion)
    this.nuevaCancion = ''

  }
  eliminarCancion(index: number) {
    this._cancionesService.eliminarCanciones(index)
    this.listaCanciones = this._cancionesService.getCanciones()
  }

  //traer de videos



}
