import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from 'app/_service/investimento/investimento.service';
import { MatDialog } from '@angular/material';
import { FiltroMovimentacaoComponent } from './filtro-movimentacao/filtro-movimentacao.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {
  public movimentacao;

  constructor(
    private investimentoService: InvestimentoService,
    public dialog: MatDialog,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovimentacao();
  }

  getMovimentacao() {
    this.movimentacao = this.investimentoService.getMovimentacao();
  }

  openFiltro() {
    const empRef = this.dialog.open(FiltroMovimentacaoComponent, {
      // width: '100vw',
      // height: '100vh',
      // maxWidth: '100vw',
      autoFocus: false
    });

    empRef.afterClosed().subscribe(result => {
      // this.getNotificacoes();
      console.log(result);
    });
  }

  goback() {
    this.location.back();
  }
}
