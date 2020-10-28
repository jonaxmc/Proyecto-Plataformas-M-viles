import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'objetivo',
    loadChildren: () => import('./paginas/objetivo/objetivo.module').then( m => m.ObjetivoPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./paginas/acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'targeta-azul',
    loadChildren: () => import('./paginas/targeta-azul/targeta-azul.module').then( m => m.TargetaAzulPageModule)
  },
  {
    path: 'targeta-verde',
    loadChildren: () => import('./paginas/targeta-verde/targeta-verde.module').then( m => m.TargetaVerdePageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./paginas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'tarjeta-roja',
    loadChildren: () => import('./paginas/tarjeta-roja/tarjeta-roja.module').then( m => m.TarjetaRojaPageModule)
  },
  {
    path: 'tablero',
    loadChildren: () => import('./paginas/tablero/tablero.module').then( m => m.TableroPageModule)
  },
  {
    path: 'tarjeta-amarilla',
    loadChildren: () => import('./paginas/tarjeta-amarilla/tarjeta-amarilla.module').then( m => m.TarjetaAmarillaPageModule)
  },
  {
    path: 'tarjeta-morada',
    loadChildren: () => import('./paginas/tarjeta-morada/tarjeta-morada.module').then( m => m.TarjetaMoradaPageModule)
  },
  {
    path: 'fin-juego',
    loadChildren: () => import('./paginas/fin-juego/fin-juego.module').then( m => m.FinJuegoPageModule)
  },
  {
    path: 'foto',
    loadChildren: () => import('./paginas/foto/foto.module').then( m => m.FotoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
