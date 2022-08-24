import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {AppMaterialModule} from "./shared/app-material/app-material.module";
import {FormBuilder, FormsModule} from '@angular/forms';
import {LoaderModule} from "./shared/components/loader/loader.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    AppMaterialModule,
    FormsModule,
    LoaderModule

  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
