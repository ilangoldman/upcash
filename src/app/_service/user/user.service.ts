import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUser() {
    const user = {
      nome: 'Ilan',
      tipo: 'I',
      icon: 'android',
      pontos: 482,
      ptsProximoNivel: 500,
      nivel: 5,
      porcentagem: 82
    };
    return user;
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

}
