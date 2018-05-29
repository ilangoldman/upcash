import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  // private authState: Observable<firebase.User>;
  private currentUser: firebase.User = null;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private http: HttpClient
  ) {
    // this.authState = this.afAuth.authState;
    // this.authState.subscribe(user => {
    //   if (user) {
    //     this.currentUser = user;
    //   } else {
    //     this.currentUser = null;
    //   }
    // });
   }

  validarUsuario(usuario, senha) {
    // let user;
    let login = null;
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    
    // this.af.auth.subscribe(user => {
    //   if (user) {
    //     // user logged in
    //     this.user = user;
    //   }
    //   else {
    //     // user not logged in
    //     this.user = {};
    //   }
    // });

    if (usuario === 'investidor@upcash.com' && senha === '123456') {
      login = {
        token: '321654',
        email: usuario,
        tipo: 'investidor'
      };
    } else if (usuario === 'empresa@upcash.com' && senha === '654321') {
      login = {
        token: '123456',
        email: usuario,
        tipo: 'empresa'
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
    this.afAuth.auth.signOut();

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

  getTipo() {
    const login = JSON.parse(localStorage.getItem('login'));
    return login.tipo;
  }

  checkTipo(tipo) {
    if (this.getTipo() === tipo) {
      return true;
    } else {
      return false;
    }
  }
}
