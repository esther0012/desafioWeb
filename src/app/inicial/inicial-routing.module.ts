import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicialComponent} from "./inicial/inicial.component";
import {InicialFormComponent} from "./inicial-form/inicial-form.component";
import {InicialEditComponent} from "./inicial-edit/inicial-edit.component";

const inicialRoutes: Routes = [
  {path: 'inicial', component: InicialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(inicialRoutes)],
  exports: [RouterModule]
})
export class InicialRoutingModule {
}
