import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'uva100',
    loadChildren: () => import('./pages/uva100/uva100.module').then( m => m.Uva100PageModule)
  },
  {
    path: 'uva136',
    loadChildren: () => import('./pages/uva136/uva136.module').then( m => m.Uva136PageModule)
  },
  {
    path: 'ordinaarray',
    loadChildren: () => import('./pages/ordinaarray/ordinaarray.module').then( m => m.OrdinaarrayPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
