import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable } from 'rxjs';
import { Carteira } from '../../_model/carteira';
import { JSONAPI } from '../../_model/jsonapi';
import { user } from 'app/GlobalVariables';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends HttpClientService {

  getCarteira() {
    // TODO: add refresh to the data
    return new Observable<Carteira>((observer) => {
      this.getResponse<JSONAPI>('/empresa/' + user.uid + '/mensagem')
        .subscribe(
          resp => {
            // const msgs = [];
            // resp.body.data.forEach(m => {
            //   msgs.push(new Carteira(m.id, m.attributes));
            // });
            // observer.next(msgs);
          },
          error => console.log(error)
        );
    });
  }

}
