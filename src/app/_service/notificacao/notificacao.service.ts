import { Injectable } from '@angular/core';

@Injectable()
export class NotificacaoService {

  constructor() { }

  getMensagens() {
    const msg = [
      {
        id: 0,
        titulo: 'Última parcela paga com sucesso',
        descricao: 'Última parcela paga com sucesso',
        flag: false,
        lida: false,
        empresa: 'UpCash',
        logo: 'logo-emp.jpg',
        data: '22/04/2018 22:35'
      },
      {
        id: 1,
        titulo: 'Essa empresa quebrou!',
        descricao: 'skdjngf',
        flag: true,
        lida: false,
        empresa: 'Nexoos',
        logo: 'logo-emp2.jpg',
        data: '22/04/2018 22:35'
      },
      {
        id: 2,
        titulo: 'saudfn',
        descricao: 'skdjngf',
        flag: false,
        lida: true,
        empresa: 'Goldman Ltda',
        logo: 'logo-emp.jpg',
        data: '22/04/2018 22:35'
      },
      {
        id: 3,
        titulo: 'Parcela atrasada',
        descricao: 'skdjngf',
        flag: true,
        lida: false,
        empresa: 'Biva',
        logo: 'logo-emp2.jpg',
        data: '22/04/2018 22:35'
      },
    ];
    return msg;
  }

  readMsg(msg) {
    console.log('Mensagem: ' + msg.id + ' foi lida');
  }


}
