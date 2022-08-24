import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: LoginService,
              private _snackBar: MatSnackBar,
              private location: Location,
              public dialog: MatDialog) {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(8), Validators.required]],
      permissao: [null, Validators.required]
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.salvar(this.form.value)
      .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back()
  }

  private onSucess() {
    this._snackBar.open("Usuário salvo com sucesso", '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this._snackBar.open("Erro ao salvar usuário", '', {duration: 5000});
  }

}
