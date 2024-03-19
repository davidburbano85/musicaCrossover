import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MiscancionesComponent } from '../miscanciones/miscanciones.component';
import { ListaCancionesService } from '../../services/lista-canciones.service';
import { Videos } from '../../models/videos.model';
import { Any } from 'typeorm';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';



@Component({
  selector: 'app-videosyt',
  standalone: true,
  imports: [YouTubePlayer, FormsModule, MiscancionesComponent, CommonModule],
  templateUrl: './videosyt.component.html',
  styleUrl: './videosyt.component.css'
})
export class VideosytComponent implements OnInit {
  listaCanciones: Videos | any;
  youtubeId: string[] = [];
  video: Videos | any;
  apiKey: string = ''
  constructor(private cancionesService: ListaCancionesService) {
    this.apiKey = this.cancionesService.enviarKey();

  }
  ngOnInit(): void {
    //esto es de youtube
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.cancionesService.ObtenerCanciones().subscribe(entradaVideo => {
      if (entradaVideo.isExitoso) {
        this.video = entradaVideo.resultado;
        this.video = [this.video]
        this.recibirLink()
        this.extraerIdYb()


      }
    })
  }

  //youtube

  aumentarindex = 0
  recibirLink() {
    this.youtubeId = this.video
    this.video = ""

  }
  objetoCanciones:any[]=[]
  linksVideos: any[] = []
  linkCopiado: Videos | any
  linkFiltrado: Videos | any
  
  extraerIdYb() {
    this.listaCanciones = new Array()
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*?v=([^\s&]+)/;
    this.youtubeId.forEach((elementosArray: any) => {
      elementosArray.forEach((elemntoObjeto: any) => {
        const match = regex.exec(elemntoObjeto.linkCopiado)
        if (match && match[1]) {
          this.listaCanciones[match[0]] = match[1]
          this.objetoCanciones = Object.values(this.listaCanciones)
          this.objetoCanciones.forEach(link => {
            const nuevoVideo = this.listaCanciones[this.aumentarindex];
            console.log("link:", link);
            
            if (!this.linksVideos.includes(link)) {
                this.linksVideos.push(link);
            }


            // this.linksVideos.push(link)


          });


        }
      })

    })
  }




  siguienteVideo() {

    this.aumentarindex++;
    if (this.aumentarindex >= this.linksVideos.length) {
      this.aumentarindex = 0;


    }
    console.log("siguiente:", this.linksVideos[this.aumentarindex]);

  }

  anteriorVideo() {
    this.aumentarindex--;
    if (this.aumentarindex <= this.linksVideos.length) {
      this.aumentarindex = 1;
    }
    console.log("anterior:", this.linksVideos[this.aumentarindex]);
    console.log("links:", this.linksVideos);

  }

 


  agregarVideo(): void {
    const nuevaCancion: Videos = {
      linkCopiado: this.linkCopiado,
      linkFiltrado: this.linkFiltrado,
      idCancion: 0
    };
    this.cancionesService.AgregarCancion(nuevaCancion).subscribe(resuldato => {
    })

  }


  //enviar videos





}
