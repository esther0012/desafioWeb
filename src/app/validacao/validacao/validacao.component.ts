import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.component.html',
  styleUrls: ['./validacao.component.scss']
})
export class ValidacaoComponent implements OnInit {

  public texto!: string;

  constructor( private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     this.texto = params['DjncdNSnfdsA']
  //     console.log(params)
  // });
  }

}
