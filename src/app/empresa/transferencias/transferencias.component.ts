import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../_service/emprestimo/emprestimo.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {
  private emprestimo;
  private proximo;

  constructor(
    private emprestimoService: EmprestimoService
  ) { }

  ngOnInit() {
    this.getParcelas();
    this.getProxParcela();
  }

  getParcelas() {
    this.emprestimo = this.emprestimoService.getPagamento();
  }

  getProxParcela() {
    for (let i = 0; i < this.emprestimo.parcelas.length; i++) {
      if (this.emprestimo.parcelas[i].status === 'pendente') {
        this.proximo = this.emprestimo.parcelas[i];
        break;
      }
    }
  }

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
