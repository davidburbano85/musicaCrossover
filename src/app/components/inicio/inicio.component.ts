import { Component, OnInit } from '@angular/core';
import { MiscancionesComponent } from '../miscanciones/miscanciones.component';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MiscancionesComponent, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  /**
   *
   */
  constructor(private pedidosService: PedidosService) {
    
  }
  ngOnInit(): void {
    // this.pedidosService.obtenerPedidos().subscribe(res=>{
    //   // console.log("esto es pedidos",res);     
    // })

    // this.pedidosService.obtenerConsumo().subscribe(consu=>{
    //   // console.log("esto es el consumo",consu);    
    // })
    //this.pedidosService.ObtenerPassword().subscribe(pass=>{
      // console.log("esto es el pass",pass);    
    //})
  }



}
