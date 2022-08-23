import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InicialRoutingModule} from './inicial-routing.module';
import {InicialComponent} from './inicial/inicial.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../shared/shared.module";
import {InicialFormComponent} from './inicial-form/inicial-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {InicialEditComponent} from './inicial-edit/inicial-edit.component';


@NgModule({
  declarations: [
    InicialComponent,
    InicialFormComponent,
    InicialEditComponent
  ],
  imports: [
    CommonModule,
    InicialRoutingModule,
    AppMaterialModule,
    MatPaginatorModule,
    SharedModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class InicialModule {
}
