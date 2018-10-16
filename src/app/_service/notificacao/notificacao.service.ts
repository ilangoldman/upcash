import { Injectable } from '@angular/core';
import { user } from 'app/GlobalVariables';
import { HttpClientService } from '../http-client.service';
import { JSONAPI } from '../../_model/jsonapi';
import { Mensagem } from '../../_model/mensagem';

@Injectable()
export class NotificacaoService extends HttpClientService {

  getMensagem(id) {
    // TODO: add refresh to the data
    //this.getResponse<JSONAPI>('/empresa/' + user.uid + '/mensagem/' + id)
    this.getResponse<JSONAPI>('detalhe-mensagem')
      .subscribe(
        resp => {
          // console.log(resp.body);
          // console.log(resp.body.data.attributes);

          return new Mensagem(id, resp.body.data.attributes);
        },
        error => console.log(error)
      );
  }

  getMensagens() {
    // TODO: add refresh to the data
    //this.getResponse<JSONAPI>('/empresa/' + user.uid + '/mensagem')
    this.getResponse<JSONAPI>('mensagem')
      .subscribe(
        resp => {
          // console.log(resp.body);
          // console.log(resp.body.data.attributes);
          resp.body.data.forEach(m => {
            user.addMensagem(new Mensagem(m.id, m.attributes));
          });
        },
        error => console.log(error)
      );
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
    // console.log('Mensagem: ' + msg.id + ' foi lida');
  }


}
