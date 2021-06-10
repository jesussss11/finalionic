import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registroasoc',
    loadChildren: () => import('./registroasoc/registroasoc.module').then( m => m.RegistroasocPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'asociacion',
    loadChildren: () => import('./asociacion/asociacion.module').then( m => m.AsociacionPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'historialus',
    loadChildren: () => import('./historialus/historialus.module').then( m => m.HistorialusPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'donacion',
    loadChildren: () => import('./donacion/donacion.module').then( m => m.DonacionPageModule)
  },
  {
    path: 'perfilasoc',
    loadChildren: () => import('./perfilasoc/perfilasoc.module').then( m => m.PerfilasocPageModule)
  },
  {
    path: 'modperfilus',
    loadChildren: () => import('./modperfilus/modperfilus.module').then( m => m.ModperfilusPageModule)
  },
  {
    path: 'modperfilasoc',
    loadChildren: () => import('./modperfilasoc/modperfilasoc.module').then( m => m.ModperfilasocPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
