import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { InvestimentoService } from '../../_service/investimento/investimento.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-investir',
  templateUrl: './investir.component.html',
  styleUrls: ['./investir.component.css']
})
export class InvestirComponent implements OnInit {
  public empresaID;
  public resumo;
  public ofertas = [];
  public oferta = 2000;

  constructor(
    public dialogRef: MatDialogRef<InvestirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private investimentoService: InvestimentoService
  ) {
    this.empresaID = data.id;
    this.resumo = this.investimentoService.getResumoInvestir(this.empresaID);
    this.displayOfertas();
  }

  investir() {
    this.investimentoService.investir(this.empresaID, this.oferta);
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
