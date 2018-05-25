import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { LoginService } from '../../_service/login/login.service';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {
  public user;
  public tipo;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }


  getUser() {
    this.user = this.userService.getUser();
    this.tipo = this.loginService.getTipo();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  goback() {
    this.location.back();
  }
}
