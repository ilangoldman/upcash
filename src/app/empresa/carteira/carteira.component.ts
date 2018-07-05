import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../_service/business/business.service';
import { Carteira } from '../../_model/carteira';
import { Transferencia } from '../../_model/transferencia';
import { AuthService } from '../../_service/auth/auth.service';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {
  carteira: Carteira;
  transferencias: Transferencia[];
  hide = false;

  constructor(
    private business: BusinessService,
    private auth: AuthService
  ) {
    auth.observableUID().subscribe((uid) => {
      // console.log(uid);
      // const uid = user.currentUserId;
      business.getCarteira(uid).subscribe((data) => {
        // console.log(data);
        this.carteira = data;
      });
      business.getTransferencia(uid).subscribe((data) => {
        // console.log(data);
        this.transferencias = data;
      });

    });
  }

  ngOnInit() {
  }

}
