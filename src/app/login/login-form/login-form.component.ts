import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

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
              private location: Location) {

    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
      permissao: [null]
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