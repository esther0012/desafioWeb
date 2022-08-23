import {Injectable} from '@angular/core';
import {Inicial} from "../model/inicial";
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InicialService {

  private readonly API = 'inicial/'

  constructor(private httpClient: HttpClient) {
  }

  list() {
    return this.httpClient.get<Inicial[]>(this.API + 'findAll').pipe(
      first(),
      // delay(2000),
      tap(inicial => console.log(inicial))
    );

  }

  salvar(record: Partial<Inicial>) {
    return this.httpClient.post<Inicial>(this.API + 'salvar', record);
  }

  delete(id: number) {
    return this.httpClient.get<boolean>(this.API + 'delete?id=' + id)
  }

  reset(id: number) {
    return this.httpClient.get<Inicial>(this.API + 'resetar?id=' + id);
  }

  entrar(email: string, password: string) {
    return this.httpClient.get<Inicial>(this.API + '/entrar', {params: {email, password}})
  }

}
