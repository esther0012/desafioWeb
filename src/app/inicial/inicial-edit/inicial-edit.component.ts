import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InicialService} from "../services/inicial.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-inicial-edit',
  templateUrl: './inicial-edit.component.html',
  styleUrls: ['./inicial-edit.component.scss']
})
export class InicialEditComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: InicialService,
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
