import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
cerveza=0
ron=0
tequila=0
boolTeq:boolean=false;
boolRon:boolean=false;
boolCerveza:boolean=false;

bebidas=[
  {nombre:'cerveza', valor:this.cerveza},
  {nombre:'ron', valor:this.ron},
  {nombre:'tequila', valor:this.tequila},

]

tequilaPedido(){
  this.tequila++
  this.boolTeq=false

}
ronPedido(){
  this.ron++
  this.boolRon=false

}

cervezaPedido(){
  this.cerveza++
  this.boolCerveza=false

}
}
