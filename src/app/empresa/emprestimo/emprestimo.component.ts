import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from '../../_service/investimento/investimento.service';
import { EmprestimoService } from '../../_service/emprestimo/emprestimo.service';
import { MatDialog } from '@angular/material';
import { SolicitacaoComponent } from '../solicitacao/solicitacao.component';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {

  private emprestimos;

  constructor(
    private emprestimoService: EmprestimoService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getEmprestimos();
  }

  solicitar() {
    const dialogRef = this.dialog.open(SolicitacaoComponent, {
      width: '320px',
      data: { id: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  getEmprestimos() {
    this.emprestimos = this.emprestimoService.getEmprestimos();
  }

  // search(value) {
  //   this.emprestimos = this.emprestimoService.getInvestimento().filter((x) => (x.nome.toLowerCase().match(value.toLowerCase())));
  // }

  borderStatus(status) {
    let statusClass = '';
    switch (status) {
      case 'Solicitado':
        statusClass = 'atencao';
        break;

      case 'Financiado':
        statusClass = 'sucesso';
        break;

      case 'Não Financiado':
        statusClass = 'erro';
        break;

      case 'Em pagamento':
        statusClass = 'atencao';
        break;

      case 'Atraso':
        statusClass = 'erro';
        break;

      case 'Concluido':
        statusClass = 'sucesso';
        break;
    }

    return statusClass;
  }



}
