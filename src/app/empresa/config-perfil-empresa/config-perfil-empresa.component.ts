import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from 'app/GlobalVariables';

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
  end = false;
  endIcon = '';
  endText = '';

  @Input() tipo;

  constructor(
    private userService: UserService
  ) {
    // console.log(this.tipo);
    // console.log(user);
    if (user.uid === undefined) {
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
      this.endIcon = 'email';
      this.endText = 'Dados cadastrados com sucesso! Valide seu email para acessar a plataforma.';
    } else {
      // console.log('aqui');
      this.cadastroUser = new FormGroup({
        email: new FormControl(user.email, Validators.required),
        // pwd: new FormControl('', Validators.required),
        nome: new FormControl(user.nome),
        cpf: new FormControl(user.cpf),
        dob: new FormControl(''),
        tel: new FormControl(user.telefone),
      });

      this.cadastroEmpresa = new FormGroup({
        cnpj: new FormControl(user.cnpj, Validators.required),
        nomeFantasia: new FormControl(user.nomeFantasia, Validators.required),
        razaoSocial: new FormControl(user.razaoSocial),
        fundacao: new FormControl(user.fundacao),
        tel: new FormControl(user.telefone),
        site: new FormControl(user.paginaWeb),
        faturamento: new FormControl(''),
      });

      this.outros = new FormGroup({
        cep: new FormControl(user.endereco.cep, Validators.required),
        rua: new FormControl(user.endereco.logradouro),
        numero: new FormControl(user.endereco.numero, Validators.required),
        complemento: new FormControl(user.endereco.complemento),
        bairro: new FormControl(user.endereco.bairro),
        cidade: new FormControl(user.endereco.cidade),
        estado: new FormControl(user.endereco.estado),

        banco: new FormControl(''),
        tipo: new FormControl(''),
        agencia: new FormControl(''),
        conta: new FormControl(''),
      });

      this.endIcon = 'done_outline';
      this.endText = 'Dados Atualizados com sucesso!';
    }
  }

  ngOnInit() {
  }

  fim() {
    // TODO
    this.end = true;
  }
}
