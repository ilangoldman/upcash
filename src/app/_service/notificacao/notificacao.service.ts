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
        icon: 'error',
        lida: false,
        data: '22/04/2018 22:35'
      },
      {
        id: 1,
        titulo: 'Essa empresa quebrou!',
        descricao: 'skdjngf',
        lida: false,
        icon: 'notification_important',
        data: '22/04/2018 22:35'
      },
      {
        id: 2,
        titulo: 'saudfn',
        descricao: 'skdjngf',
        lida: true,
        icon: 'vpn_key',
        data: '22/04/2018 22:35'
      },
      {
        id: 3,
        titulo: 'Parcela atrasada',
        descricao: 'skdjngf',
        lida: false,
        icon: 'next_week',
        data: '22/04/2018 22:35'
      },
    ];
    return msg;
  }

  getResumoMensagens() {
    const msg = [
      {
        id: 0,
        titulo: 'Última parcela paga com sucesso',
        icon: 'error',
        data: '22/04 22:35'
      },
      {
        id: 1,
        titulo: 'Essa empresa quebrou!',
        icon: 'notification_important',
        data: '22/04 22:35'
      },
      {
        id: 3,
        titulo: 'Parcela atrasada',
        icon: 'next_week',
        data: '22/04 22:35'
      },
    ];
    return msg;
  }

  readMsg(msg) {
    console.log('Mensagem: ' + msg.id + ' foi lida');
  }


}
