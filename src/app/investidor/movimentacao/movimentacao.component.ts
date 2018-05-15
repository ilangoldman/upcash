import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from '../../_service/investimento/investimento.service';
import { MatDialog } from '@angular/material';
import { FiltroMovimentacaoComponent } from './filtro-movimentacao/filtro-movimentacao.component';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {
  public movimentacao;

  constructor(
    private investimentoService: InvestimentoService,
    public dialog: MatDialog
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
}
