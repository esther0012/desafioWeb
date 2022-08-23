import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then(m => m.InicialModule)
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./inicial/inicial.module').then(m => m.InicialModule)
  },
  {
    path: 'loginform',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./inicial/inicial.module').then(m => m.InicialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
