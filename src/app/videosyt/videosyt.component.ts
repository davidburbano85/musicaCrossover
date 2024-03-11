import { Component, OnInit, Input, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YouTubePlayer } from '@angular/youtube-player';
import { MiscancionesComponent } from '../miscanciones/miscanciones.component';
import { ListaCancionesService } from '../services/lista-canciones.service';
import { VistaMiniaturaServiceService } from '../services/vista-miniatura-service.service';

@Component({
  selector: 'app-videosyt',
  standalone: true,
  imports: [YouTubePlayer, FormsModule, MiscancionesComponent],
  templateUrl: './videosyt.component.html',
  styleUrl: './videosyt.component.css'
})
export class VideosytComponent implements OnInit {


  listaCanciones: string[] = [];
  youtubeId: string[] = [];
  video: string = '';
  private _cancionesService = inject(ListaCancionesService)

  ngOnInit(): void {
    this.listaCanciones = this._cancionesService.getCanciones();
    this.extraerIdYb();
  }

  //youtube

  aumentarindex = 0
  recibirLink() {
    if (this.video.trim() !== '') {
      this.listaCanciones.push(this.video);
      this.video = '';
    }
    this.extraerIdYb();
  }

  extraerIdYb() {
    this.listaCanciones.forEach(link => {
      const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*?v=([^\s&]+)/;
      const match = link.match(regex);
      if (match && match[1]) {
        this.youtubeId.push(match[1]);
      }
    });


  }

  siguienteVideo() {
    this.aumentarindex++;
    if (this.aumentarindex >= this.youtubeId.length) {
      this.aumentarindex = 0;
    }
  }

  anteriorVideo() {
    this.aumentarindex--;
    if (this.aumentarindex <= this.youtubeId.length) {
      this.aumentarindex = 1;
    }
  }


  //enviar videos





}
