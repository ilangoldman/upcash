import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { LoginService } from '../../_service/login/login.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-config-perfil-empresa',
  templateUrl: './config-perfil-empresa.component.html',
  styleUrls: ['./config-perfil-empresa.component.css']
})
export class ConfigPerfilEmpresaComponent implements OnInit {

  public user;

  constructor(
    private userService: UserService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user = this.userService.getUser();
  }

}
