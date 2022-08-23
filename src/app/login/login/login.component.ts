import {Component, OnInit} from '@angular/core';
import {InicialService} from "../../inicial/services/inicial.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public texto!: string;

  formLogin: FormGroup;

  constructor(private inicialService: InicialService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private builder: FormBuilder) {

    this.formLogin = this.builder.group({
      email: [null],
      password: [null]
    });

  }

  ngOnInit(){


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

}
