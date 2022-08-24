import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InicialService} from "../services/inicial.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-inicial-form',
  templateUrl: 'inicial-form.component.html',
  styleUrls: ['./inicial-form.component.scss']
})
export class InicialFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: InicialService,
              private _snackBar: MatSnackBar,
              private location: Location) {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null,  [Validators.required, Validators.email]],
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

