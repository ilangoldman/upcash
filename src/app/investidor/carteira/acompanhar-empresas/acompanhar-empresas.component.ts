import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from '../../../_service/investimento/investimento.service';

@Component({
  selector: 'app-acompanhar-empresas',
  templateUrl: './acompanhar-empresas.component.html',
  styleUrls: ['./acompanhar-empresas.component.css']
})
export class AcompanharEmpresasComponent implements OnInit {
  public investimentos;

  constructor(
    private investimentoService: InvestimentoService
  ) { }

  ngOnInit() {
    this.getInvestimento();
  }

  getInvestimento() {
    this.investimentos = this.investimentoService.getInvestimento();
  }

  showInfo(tt) {
    console.log(tt);
  }

  borderStatus(status) {
    let statusClass = '';
    switch (status) {
      case 'Lista de Espera':
        statusClass = 'atencao';
        break;

      case 'Oferta Aceita':
        statusClass = 'sucesso';
        break;

      case 'Financiada':
        statusClass = 'sucesso';
        break;

      case 'Transferencias':
        statusClass = 'atencao';
        break;

      case 'Pago':
        statusClass = 'sucesso';
        break;

      case 'Atraso':
        statusClass = 'erro';
        break;
    }

    return statusClass;
  }
}