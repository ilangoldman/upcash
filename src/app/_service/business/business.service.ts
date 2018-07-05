import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable } from 'rxjs';
import { Carteira } from '../../_model/carteira';
import { JSONAPI } from '../../_model/jsonapi';
import { user } from 'app/GlobalVariables';
import { Transferencia } from '../../_model/transferencia';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends HttpClientService {

  getCarteira(uid) {
    // TODO: add refresh to the data
    return new Observable<Carteira>((observer) => {
      this.getResponse<JSONAPI>('/empresa/' + uid + '/carteira')
        .subscribe(
          resp => {

            // const msgs = [];
            // resp.body.data.forEach(m => {
            //   msgs.push(new Carteira(m.id, m.attributes));
            // });
            const c = new Carteira(resp.body.data.id, resp.body.data.attributes);
            observer.next(c);
          },
          error => console.log(error)
        );
    });
  }

  getTransferencia(uid) {
    // TODO: add refresh to the data
    return new Observable<Transferencia[]>((observer) => {
      this.getResponse<JSONAPI>('/empresa/' + uid + '/carteira/transferencia')
        .subscribe(
          resp => {

            const t = [];
            resp.body.data.forEach(m => {
              t.push(new Transferencia(m.id, m.attributes));
            });
            observer.next(t);
          },
          error => console.log(error)
        );
    });
  }

}
