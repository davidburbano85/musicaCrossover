import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaCancionesService } from '../../services/lista-canciones.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { VideosytComponent } from '../videosyt/videosyt.component';
import { YouTubePlayer } from '@angular/youtube-player';
import { PedidosService } from '../../services/pedidos.service';
import { Videos } from '../../models/videos.model';

@Component({
  selector: 'app-miscanciones',
  standalone: true,
  templateUrl: './miscanciones.component.html',
  styleUrl: './miscanciones.component.css',
  imports: [FormsModule, CommonModule, RouterModule, RouterLink, HeaderComponent, YouTubePlayer, VideosytComponent]
})
export class MiscancionesComponent implements OnInit {

  listaCanciones: string[]=[];
  nuevaCancion: Videos | any;
  conteo:number=0;
  constructor(private cancionesService:ListaCancionesService){}
 
  ngOnInit(): void {
    
    this.cancionesService.ObtenerCanciones().subscribe(entraVideo=>{
      if(entraVideo.isExitoso){
        this.nuevaCancion=entraVideo.resultado;
      }
    })
    console.log("esta es lista de canciones: ", this.listaCanciones);
    
  }
  linkCopiado: Videos | any
  linkFiltrado: Videos | any

  agregarVideo(): void {
    const nuevaCancion: Videos = {
      linkCopiado: this.linkCopiado,
      linkFiltrado: this.linkFiltrado,
      idCancion: 0
    };
    this.cancionesService.AgregarCancion(nuevaCancion).subscribe(resuldato => {
      console.log(resuldato)
    })

  }

  // agregarCancion() {
    // this._cancionesService.agregarCanciones(this.nuevaCancion)
    // this.nuevaCancion = ''

  // }
  // eliminarCancion(index: number) {
  //   this._cancionesService.eliminarCanciones(index)
  //   this.listaCanciones = this._cancionesService.getCanciones()
  // }

  //traer de videos



}
