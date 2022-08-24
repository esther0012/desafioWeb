import {Component, OnInit} from '@angular/core';
import {InicialService} from "../../inicial/services/inicial.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  validar: boolean;
  formLogin: FormGroup;
  displayedColumns = ['validado'];
  // @ts-ignore
  private codificado: string;


  constructor(private inicialService: InicialService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private builder: FormBuilder) {

    this.formLogin = this.builder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]]
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.codificado = params['DjncdNSnfdsA'];
    })
    if (this.codificado !== undefined){
       this.validacao(this.codificado);
    }


  }


  onEntrar() {
    this.inicialService.entrar(this.formLogin.value.email, this.formLogin.value.password)
      .subscribe(response => {
        if (response.id === null) {

        } else {
          localStorage.setItem('nome', response.name);
          localStorage.setItem('permissao', response.permissao.toString());
          localStorage.setItem('id', response.id.toString());
          this.router.navigate(['inicial'], {relativeTo: this.route});
        }
      })
  }

  onRegistrar() {
    this.router.navigate(['loginform'], {relativeTo: this.route});
  }

  private validacao(codificado: string) {
    this.inicialService.validar(codificado).subscribe(value => {
      this.validar = true;
    })

  }
}
