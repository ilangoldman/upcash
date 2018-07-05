import { Component, OnInit } from '@angular/core';
import { user } from 'app/GlobalVariables';
import { Recebivel } from '../../_model/recebivel';
import { UserService } from '../../_service/user/user.service';

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.component.html',
  styleUrls: ['./recebiveis.component.css']
})
export class RecebiveisComponent implements OnInit {
  public analise: Recebivel;
  public recebiveis: Recebivel[];

  constructor(
    private userService: UserService
  ) {
    userService.getRecebiveis().subscribe((resp) => {
      this.recebiveis = resp;
      console.log(this.recebiveis);
      console.log(this.recebiveis[0]);
      if (this.recebiveis[0].status === 'Em análise') {
        this.analise = this.recebiveis[0];
        this.recebiveis = this.recebiveis.slice(1);
      }
    });
  }

  ngOnInit() {
    // this.getParcelas();
    // this.getProxParcela();
  }

  // getParcelas() {
  //   this.emprestimo = this.emprestimoService.getPagamento();
  // }

  // getProxParcela() {
  //   for (let i = 0; i < this.emprestimo.parcelas.length; i++) {
  //     if (this.emprestimo.parcelas[i].status === 'pendente') {
  //       this.proximo = this.emprestimo.parcelas[i];
  //       break;
  //     }
  //   }
  // }

  borderStatus(status) {
    let statusClass = '';
    switch (status) {
      case 'atraso':
        statusClass = 'erro';
        break;

      case 'pago':
        statusClass = 'sucesso';
        break;
    }

    return statusClass;
  }

}
