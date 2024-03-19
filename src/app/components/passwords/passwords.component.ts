import { Component, OnInit } from '@angular/core';
import { password } from '../../models/password.model';
import { PedidosService } from '../../services/pedidos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passwords',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './passwords.component.html',
  styleUrl: './passwords.component.css'
})
export class PasswordsComponent implements OnInit {
  passwords: password | any;
  constructor(private pedidoServicio: PedidosService) { }
  ngOnInit(): void {
    this.pedidoServicio.ObtenerPassword().subscribe(pass => {
     if(pass.isExitoso){
      this.passwords = pass.resultado;
     }        
    })

  }


}

