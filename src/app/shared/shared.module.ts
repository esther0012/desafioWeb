import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import {PermissionPipe} from './pipes/permission.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import {NgxLoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    ErrorDialogComponent,
    PermissionPipe
  ],
    imports: [
        CommonModule,
        AppMaterialModule,
        NgxLoadingModule
    ],
  exports: [ErrorDialogComponent, PermissionPipe]
})
export class SharedModule {
}
