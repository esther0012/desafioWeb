import { Component } from '@angular/core';
import {LoaderService} from "./loader.service";
import {Subject} from "rxjs";

@Component({
  selector: 'loader',
  template: '<ngx-loading [show]="(loading | async)!"></ngx-loading>'
})
export class LoaderComponent{

  constructor(private loaderService: LoaderService) { }

  public loading: Subject<boolean> = this.loaderService.isLoading;




}
