import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as anime from 'animejs';
import { LoginService } from 'app/_service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  loginStatus = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    if (loginService.isLogged()) {
      this.router.navigate([this.loginService.getTipo() + '/home']);
    }
  }

  ngOnInit() {
  }


  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Esse campo não pode estar vazio' :
      this.email.hasError('email') ? 'O email não é válido' :
        '';
  }

  login(usuario, senha) {
    const response = this.loginService.validarUsuario(usuario, senha);

    if (response) {
      this.completeLogin();
    } else {
      this.erroLogin();
    }
  }

  clearErro() {
    this.loginStatus = '';
  }

  completeLogin() {
    this.router.navigate([this.loginService.getTipo() + '/home']);
  }

  erroLogin() {
    // todo mensagem de erro
    this.loginStatus = 'erro';

    anime({
      targets: '#login-button',
      rotate: [{
        value: '-10deg'
      },
      {
        value: '10deg'
      }, {
        value: '-10deg'
      }, {
        value: '10deg'
      }, {
        value: '-10deg'
      },
      {
        value: '0deg'
      }],
      duration: 500
    });
  }

  goto(url) {
    // TODO
    // this.router.navigate(['']);
  }
}
