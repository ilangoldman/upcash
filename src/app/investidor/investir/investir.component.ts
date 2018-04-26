import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { InvestimentoService } from '../../_service/investimento/investimento.service';

@Component({
  selector: 'app-investir',
  templateUrl: './investir.component.html',
  styleUrls: ['./investir.component.css']
})
export class InvestirComponent implements OnInit {
  private empresaID;
  private resumo;
  private ofertas = [];

  constructor(
    public dialogRef: MatDialogRef<InvestirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private investimentoService: InvestimentoService
  ) {
    this.empresaID = data.id;
    this.resumo = this.investimentoService.getResumoInvestir(this.empresaID);
    this.displayOfertas();
  }

  investir(valor) {
    this.investimentoService.investir(this.empresaID, valor);
    this.dialogRef.close();
  }

  displayOfertas() {
    for (let i = this.resumo.ofertas.min; i <= this.resumo.ofertas.max; i += this.resumo.ofertas.step) {
      this.ofertas.push(i);
    }
  }

  ngOnInit() {
  }

}
