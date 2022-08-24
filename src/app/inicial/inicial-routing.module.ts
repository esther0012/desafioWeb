import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicialComponent} from "./inicial/inicial.component";

const inicialRoutes: Routes = [
  {path: 'inicial', component: InicialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(inicialRoutes)],
  exports: [RouterModule]
})
export class InicialRoutingModule {
}
