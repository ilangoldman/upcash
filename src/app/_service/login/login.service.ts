import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  validarUsuario(usuario, senha): boolean {
    // let user;
    let login = null;
    if (usuario === 'investidor@upcash.com' && senha === '123456') {
      login = {
        token: '321654',
        email: usuario
      };
    } else if (usuario === 'empresa@upcash.com' && senha === '654321') {
      login = {
        token: '123456',
        email: usuario
      };
    }

    if (login === null) {
      return false;
    } else {
      localStorage.setItem('login', JSON.stringify(login));
      return true;
    }
  }

  logout() {
    if (this.isLogged()) {
      localStorage.removeItem('login');
    } else {
      this.router.navigate(['']);
    }
  }

  isLogged(): boolean {
    if (localStorage.getItem('login')) {
      return true;
    } else {
      return false;
    }
  }
}
