import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Inicial } from '../model/inicial';
import { InicialService } from '../services/inicial.service';

@Injectable({
  providedIn: 'root'
})
export class InicialResolver implements Resolve<Inicial> {

  constructor(private service: InicialService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Inicial> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of();
  }
}
