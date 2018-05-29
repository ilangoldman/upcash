import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';
import { Observable } from 'rxjs';

export interface User {
  nome: string;
  tipo: string;
}

@Injectable()
export class UserService {
  public user;
  public url = 'http://localhost:8080/users.php';
  // public url = '/backend-dot-upcash-md.appspot.com';
  // public url = 'assets/teste.json';

  constructor(
    private http: HttpClient
  ) { }

  alterarEmail(email) {
    const login = JSON.parse(localStorage.getItem('login'));
    console.log(email + ' - ' + login.email);
  }

  alterarSenha(pwd, newPwd) {
    const login = JSON.parse(localStorage.getItem('login'));
    console.log(pwd + ' - ' + newPwd + ' - ' + login.email);
  }

  getResponse(): Observable<HttpResponse<User>> {
    return this.http.get<User>(
      this.url, { observe: 'response' });
  }

  getUser() {
    // const user = {
    //   nome: 'Ilan',
    //   email: 'investidor@upcash.com',
    //   // empresa: 'Nascetur Ridiculus Mus Institute',
    //   empresa: 'Goldman Ltda',
    //   icon: 'android',
    //   pontos: 482,
    //   ptsProximoNivel: 500,
    //   nivel: 5,
    //   porcentagem: 82,
    //   beneficios: 3
    // };
    // return user;

    return new Promise((result, reject) => {
      this.getResponse().subscribe(data => {
        // console.log(JSON.parse(data.body));
        // this.user = data;


        // PLASE REMOVE THIS SHIT!!
        const login = {
          email: data.body.nome,
          tipo: data.body.tipo
        };
        localStorage.setItem('login', JSON.stringify(login));
        result(data.body);
      });
    });
  }

  getPontos() {
    const pontos = [
      {
        id: 0,
        icon: 'android',
        titulo: 'Criar Perfil',
        descricao: 'bla bla bla',
        numPontos: 10,
        completo: 0
      },
      {
        id: 1,
        icon: 'cake',
        titulo: 'Criar Perfil',
        descricao: 'Parabéns! Vc completou o seu perfil! Ganhe aqui alguns pontos de presente para vc ficar feliz.',
        numPontos: 10,
        completo: 1
      },
      {
        id: 2,
        icon: 'android',
        titulo: 'Criar Perfil',
        descricao: 'bla bla bla',
        numPontos: 5,
        completo: 0
      },
      {
        id: 3,
        icon: 'android',
        titulo: 'Criar Perfil',
        descricao: 'Parabéns! Vc completou o seu perfil! Ganhe aqui alguns pontos de presente para vc ficar feliz.',
        numPontos: 10,
        completo: 0
      },
      {
        id: 4,
        icon: 'android',
        titulo: 'Criar Perfil',
        descricao: 'bla bla bla',
        numPontos: 10,
        completo: 0
      },
    ];
    return pontos;
  }

  getAmigos() {
    const amigos = [
      {
        badge: 'cake',
        nome: 'Ilan',
        nivel: 999
      },
      {
        badge: 'android',
        nome: 'Gabriel',
        nivel: 32
      },
      {
        badge: 'home',
        nome: 'Leo',
        nivel: 28
      },
      {
        badge: 'android',
        nome: 'Roberval',
        nivel: 15
      },
      {
        badge: 'cake',
        nome: 'Waldisley',
        nivel: 8
      }
    ];
    return amigos;
  }

  getPontuacao() {
    const tblPontos = [
      {
        nivel: 1,
        numPontos: 100
      },
      {
        nivel: 2,
        numPontos: 200
      },
      {
        nivel: 3,
        numPontos: 300
      },
      {
        nivel: 4,
        numPontos: 400
      },
      {
        nivel: 5,
        numPontos: 500
      },
      {
        nivel: 6,
        numPontos: 600
      },
      {
        nivel: 7,
        numPontos: 700
      },
    ];
    return tblPontos;
  }

  getBeneficios() {
    const beneficios = [
      {
        icon: 'cake',
        titulo: 'Vale $$',
        descricao: 'bla bla bla',
        ajuda: 'como conseguir?',
        completo: true
      },
      {
        icon: 'cake',
        titulo: 'Vale $$',
        descricao: 'bla bla bla',
        ajuda: 'como conseguir?',
        completo: false
      },
      {
        icon: 'cake',
        titulo: 'Vale $$',
        descricao: 'bla bla bla',
        ajuda: 'como conseguir?',
        completo: true
      },
      {
        icon: 'cake',
        titulo: 'Vale $$',
        descricao: 'bla bla bla',
        ajuda: 'como conseguir?',
        completo: false
      },
      {
        icon: 'cake',
        titulo: 'Vale $$',
        descricao: 'bla bla bla',
        ajuda: 'como conseguir?',
        completo: true
      },
    ];
    return beneficios;
  }

}
