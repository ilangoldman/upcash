import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_service/login/login.service';

@Component({
  selector: 'app-config-perfil-empresa',
  templateUrl: './config-perfil-empresa.component.html',
  styleUrls: ['./config-perfil-empresa.component.css']
})
export class ConfigPerfilEmpresaComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
