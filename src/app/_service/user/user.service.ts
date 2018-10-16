import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Empresa } from '../../_model/empresa';
import { Observable } from 'rxjs';
import { JSONAPI } from '../../_model/jsonapi';
import { Endereco } from '../../_model/endereco';
import { Sacado } from '../../_model/sacado';
import { user } from 'app/GlobalVariables';
import { Mensagem } from '../../_model/mensagem';
import { Recebivel } from '../../_model/recebivel';

@Injectable()
export class UserService extends HttpClientService {
  // public empresa: Empresa;

  // alterarEmail(email) {
  //   const login = JSON.parse(localStorage.getItem('login'));
  //   console.log(email + ' - ' + login.email);
  // }

  // alterarSenha(pwd, newPwd) {
  //   const login = JSON.parse(localStorage.getItem('login'));
  //   console.log(pwd + ' - ' + newPwd + ' - ' + login.email);
  // }

  getEmpresa(uid) {
    // TODO: add refresh to the data
    //this.getResponse<JSONAPI>('/empresa/' + uid)
    this.getResponse<JSONAPI>('empresa')
      .subscribe(
        resp => {
          // console.log(resp.body);
          // console.log(resp.body.data.attributes);
          user.create(uid, resp.body.data.id, resp.body.data.attributes);
          user.endereco = new Endereco(resp.body.included[0].attributes);
          this.getSacado();
          // this.getMensagens();
          // this.getRecebiveis();
          // console.log(user);
        },
        error => console.log(error)
      );
  }

  getSacado() {
    //this.getResponse<JSONAPI>('/empresa/' + user.uid + '/sacado')
    this.getResponse<JSONAPI>('sacado')
      .subscribe(
        resp => {
          // console.log(resp.body);
          resp.body.data.forEach(s => {
            user.addSacado(new Sacado(s.id, s.attributes));
          });
          // console.log(user);
        },
        error => console.log(error)
      );
  }

  getMensagens() {
    // TODO: add refresh to the data
    return new Observable<Mensagem[]>((observer) => {
      //this.getResponse<JSONAPI>('/empresa/' + user.uid + '/mensagem')
      this.getResponse<JSONAPI>('mensagem')
        .subscribe(
          resp => {
            const msgs = [];
            resp.body.data.forEach(m => {
              msgs.push(new Mensagem(m.id, m.attributes));
            });
            observer.next(msgs);
          },
          error => console.log(error)
        );
    });
  }

  readMsg(msg) {
    // melhorar
    //this.update<JSONAPI>('/empresa/' + user.uid + '/mensagem/' + msg, null).subscribe();
  }

  getRecebiveis() {
    // TODO: add refresh to the data
    return new Observable<Recebivel[]>((observer) => {
      //this.getResponse<JSONAPI>('/empresa/' + user.uid + '/adiantamento')
      this.getResponse<JSONAPI>('adiantamento')
        .subscribe(
          resp => {
            // console.log(resp.body);
            // console.log(resp.body.data.attributes);
            const recebivel = [];
            resp.body.data.forEach(r => {
              recebivel.push(new Recebivel(r.id, r.attributes));
            });
            observer.next(recebivel);
          },
          error => console.log(error)
        );
    });
  }

}
