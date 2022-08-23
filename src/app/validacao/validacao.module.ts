import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ValidacaoRoutingModule} from './validacao-routing.module';
import {ValidacaoComponent} from './validacao/validacao.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ValidacaoComponent
  ],
  imports: [
    CommonModule,
    ValidacaoRoutingModule,
    MatIconModule,
    MatButtonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class ValidacaoModule {
}

