import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login/login.component";
import {InicialComponent} from "./inicial/inicial/inicial.component";
import {InicialFormComponent} from "./inicial/inicial-form/inicial-form.component";
import {LoginFormComponent} from "./login/login-form/login-form.component";

const routes: Routes = [
  {
    path: '', pathMatch: "full",
    component: LoginComponent
  },
  {path: 'adicionar', component: InicialFormComponent, pathMatch: "prefix"},
  {path: 'loginform', component: LoginFormComponent, pathMatch: "prefix"},
  {path: 'inicial', component: InicialComponent, pathMatch: "full"},
  {
    path: 'adicionar',
    loadChildren: () => import('./inicial/inicial.module').then(m => m.InicialModule)
  },
  {
    path: 'loginform',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
