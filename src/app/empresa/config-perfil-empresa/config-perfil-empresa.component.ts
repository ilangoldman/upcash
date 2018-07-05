import { Component, OnInit } from '@angular/core';
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
  // private outros: FormGroup;
  isLinear = true;

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

    // this.outros = new FormGroup({
    //   assina: new FormControl('', Validators.required),
    //   prazo: new FormControl('', Validators.required),
    //   motivo: new FormControl(''),
    // });
  }

  ngOnInit() {
  }

  fim() {
    // TODO

  }
}
