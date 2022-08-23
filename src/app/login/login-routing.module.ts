import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {InicialComponent} from "../inicial/inicial/inicial.component";
import {InicialFormComponent} from "../inicial/inicial-form/inicial-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {InicialEditComponent} from "../inicial/inicial-edit/inicial-edit.component";


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {path: 'inicial', component: InicialComponent},
  {path: 'inicial/adicionar', component: InicialFormComponent},
  {path: 'inicial/editar:{id}', component: InicialEditComponent},
  {path: 'loginform', component: LoginFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

export const ArrayOfComponents = [InicialComponent, InicialFormComponent, LoginComponent, LoginFormComponent]
