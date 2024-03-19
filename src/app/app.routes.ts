import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"miscanciones",
        loadComponent: () => import('./components/miscanciones/miscanciones.component').then(m=>m.MiscancionesComponent)
    },
 
    {
        path:"pedidos",
        loadComponent: () => import('./components/pedidos/pedidos.component').then(m=>m.PedidosComponent)
    },
    {
        path:"videosyt",
        loadComponent: () => import('./components/videosyt/videosyt.component').then(m=>m.VideosytComponent)
    },
    {
    path:"passwords",
    loadComponent: () => import('./components/passwords/passwords.component').then(m=>m.PasswordsComponent)
    },
    {
        path:"**",
        loadComponent: () => import('./components/inicio/inicio.component').then(m=>m.InicioComponent)
    },


];
