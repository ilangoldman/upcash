import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-config-perfil-empresa',
  templateUrl: './config-perfil-empresa.component.html',
  styleUrls: ['./config-perfil-empresa.component.css']
})
export class ConfigPerfilEmpresaComponent implements OnInit {
  private cadastroUser: FormGroup;
  private cadastroEmpresa: FormGroup;
  private outros: FormGroup;
  isLinear = true;

  @Input() tipo;

  constructor(
    private user: UserService
  ) {
    this.cadastroUser = new FormGroup({
      email: new FormControl('', Validators.required),
      // pwd: new FormControl('', Validators.required),
      nome: new FormControl(''),
      cpf: new FormControl(''),
      dob: new FormControl(''),
      tel: new FormControl(''),
    });

    this.cadastroEmpresa = new FormGroup({
      cnpj: new FormControl('', Validators.required),
      nomeFantasia: new FormControl('', Validators.required),
      razaoSocial: new FormControl(''),
      fundacao: new FormControl(''),
      tel: new FormControl(''),
      site: new FormControl(''),
      faturamento: new FormControl(''),
    });

    this.outros = new FormGroup({
      cep: new FormControl('', Validators.required),
      rua: new FormControl(''),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),

      banco: new FormControl(''),
      tipo: new FormControl(''),
      agencia: new FormControl(''),
      conta: new FormControl(''),
    });

    if (this.tipo === 1) {
      // get User and fill information
    }
  }

  ngOnInit() {
  }

  fim() {
    // TODO
    if (this.tipo === 1) {
      // update user info
    } else {
      // create new user
    }
  }
}
