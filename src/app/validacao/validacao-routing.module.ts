import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValidacaoComponent} from "./validacao/validacao.component";


const routes: Routes = [
  {
    path: 'validacao', component: ValidacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidacaoRoutingModule {
}

export const ArrayOfComponents = []
