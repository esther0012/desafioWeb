import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {InicialComponent} from "../inicial/inicial/inicial.component";
import {InicialFormComponent} from "../inicial/inicial-form/inicial-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

export const ArrayOfComponents = [InicialComponent, InicialFormComponent, LoginComponent, LoginFormComponent]
