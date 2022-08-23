import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../../login/model/login";

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  private readonly API = 'inicial/'

  constructor(private httpClient: HttpClient) {
  }

  salvar(record: Partial<Login>) {
    return this.httpClient.post<Login>(this.API + 'salvar', record);
  }


}
