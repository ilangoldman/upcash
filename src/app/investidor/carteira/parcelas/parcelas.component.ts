import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestimentoService } from '../../../_service/investimento/investimento.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent implements OnInit {
  public parcelas;

  constructor(
    private investimentoService: InvestimentoService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.parcelas = this.investimentoService.getInvestimento(params['id']);
    });
  }

  ngOnInit() {
  }

  goback() {
    this.location.back();
  }

  parcelasPagas() {
    const pago = this.parcelas.numPago;
    return (pago / this.parcelas.parcelas.length) * 100;
  }

  parcelasAtraso() {
    const atraso = this.parcelas.numAtraso;
    return (atraso / this.parcelas.parcelas.length) * 100;
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
