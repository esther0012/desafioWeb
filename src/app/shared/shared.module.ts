import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import {PermissionPipe} from './pipes/permission.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    PermissionPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent, PermissionPipe]
})
export class SharedModule {
}
