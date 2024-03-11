import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"miscanciones",
        loadComponent: () => import('./miscanciones/miscanciones.component').then(m=>m.MiscancionesComponent)
    },
 
    {
        path:"pedidos",
        loadComponent: () => import('./pedidos/pedidos.component').then(m=>m.PedidosComponent)
    },
    {
        path:"videosyt",
        loadComponent: () => import('./videosyt/videosyt.component').then(m=>m.VideosytComponent)
    },
    {
        path:"**",
        loadComponent: () => import('./inicio/inicio.component').then(m=>m.InicioComponent)
    },


];
