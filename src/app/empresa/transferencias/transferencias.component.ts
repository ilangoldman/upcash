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
    this.proximo = this.emprestimoService.getProximaParcela();
  }

  borderStatus(status) {
    let statusClass = '';
    switch (status) {
      case 'Pago':
        statusClass = 'pago';
        break;

      case 'Atraso':
        statusClass = 'atraso';
        break;
    }

    return statusClass;
  }

}
