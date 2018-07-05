import { Component, OnInit } from '@angular/core';
import { user } from 'app/GlobalVariables';
import { Recebivel } from '../../_model/recebivel';
import { UserService } from '../../_service/user/user.service';
import { MatDialog } from '@angular/material';
import { AdiantamentoComponent } from './adiantamento/adiantamento.component';

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.component.html',
  styleUrls: ['./recebiveis.component.css']
})
export class RecebiveisComponent implements OnInit {
  public analise: Recebivel[];
  public recebiveis: Recebivel[];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) {
    userService.getRecebiveis().subscribe((resp) => {
      this.recebiveis = resp;
      console.log(this.recebiveis);
      console.log(this.recebiveis[0]);
      this.analise = [];
      this.recebiveis = [];
      resp.forEach(r => {
        if (r.status === 'Em análise') {
          this.analise.push(r);
        } else {
          this.recebiveis.push(r);
        }
      });
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
      case 'Recebido':
        statusClass = 'atencao';
        break;

      case 'Concluído':
        statusClass = 'sucesso';
        break;
    }

    return statusClass;
  }

  pedirAdiantamento() {
    const pedido = this.dialog.open(AdiantamentoComponent, {
      // width: '80%',
      // height: '100vh',
      // maxWidth: '100vw',
      // data: { msg: msg }
    });

    pedido.afterClosed().subscribe(result => {
      // console.log(msg.id);
      // if (!msg.lida) {
      //   this.userService.readMsg(msg.id);
      // }
    });
  }

}
