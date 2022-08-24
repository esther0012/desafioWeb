import {Component, OnInit} from '@angular/core';
import {Inicial} from "../model/inicial";
import {InicialService} from "../services/inicial.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {


  // @ts-ignore
  $inicial: Observable<Inicial[]> = [];
  displayedColumns = ['id', 'name', 'email', 'permissao', 'validado', 'actions'];
  admin: boolean | undefined;

  constructor(private inicialService: InicialService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('permissao') === '1') {
      this.getUsers();
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  onError(errorMsg: String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['adicionar']);
  }

  delete(id: number) {
    this.inicialService.delete(id)
      .pipe(
        catchError(error => {
          this.onError('Erro ao deletar usuário');
          return of([])
        })
      ).subscribe(response => {
      if (response) {
        this.$inicial = new Observable<Inicial[]>();
        this.getUsers();
      }
    });
  }

  getUsers() {
    this.$inicial = this.inicialService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar usuários');
          return of([])

        })
      );
  }

  onSair() {
    this.location.back()
  }


  reset(id: number) {
    this.inicialService.reset(id)
      .pipe(
        catchError(error => {
          this.onError('Erro ao resetar senha');
          return of([])
        })
      ).subscribe(response => {
      if (response) {
        this.$inicial = new Observable<Inicial[]>();
        this.getUsers();
      }
    });
  }


}
