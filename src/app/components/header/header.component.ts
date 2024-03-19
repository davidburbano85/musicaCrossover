import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MiscancionesComponent } from '../miscanciones/miscanciones.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MiscancionesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
suma=0
sumando=false
sumar(sumando:boolean){
  this.suma++
  this.sumando=sumando
  console.log(sumando)

}
}
