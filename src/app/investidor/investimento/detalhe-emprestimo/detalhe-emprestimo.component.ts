import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { InvestimentoService } from 'app/_service/investimento/investimento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Chart } from 'chart.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InvestirComponent } from '../investir/investir.component';

@Component({
  selector: 'app-detalhe-emprestimo',
  templateUrl: './detalhe-emprestimo.component.html',
  styleUrls: ['./detalhe-emprestimo.component.css']
})
export class DetalheEmprestimoComponent implements OnInit {
  @ViewChild('faturamentoChart') canvasFaturamento: ElementRef;
  @ViewChild('ratingChart') canvasRating: ElementRef;

  private empresa;
  private tabSelected = 0;
  private acionistasCol;
  private highlightsCol;
  private scroll = '';
  private parcelas;

  constructor(
    private investimentoService: InvestimentoService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public dialog: MatDialog,
    // public dialogRef: MatDialogRef<DetalheEmprestimoComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.route.params.subscribe(params => {
      this.empresa = this.investimentoService.getEmpresa(params['id']);
    });
    
    // this.empresa = this.investimentoService.getEmpresa(data.id);
    // this.acionistasCol = Object.keys(this.empresa.geral.acionistas[0]);
    this.highlightsCol = Object.keys(this.empresa.financeiro.highlights[0]);
  }

  ngOnInit() {
    this.displayFaturamento();
    this.displayRating();
    this.displayParcelas();
  }


  investir() {
    const dialogRef = this.dialog.open(InvestirComponent, {
      width: '320px',
      data: { id: this.empresa.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  close() {
    this.location.back();
  }

  changeTab(index) {
    this.tabSelected = index;
  }

  // scrollCard() {
  //   this.scroll = 'scroll';
  // }

  displayFaturamento() {
    const entradaData = {
      data: this.empresa.financeiro.faturamento.valor,
      backgroundColor: 'rgba(64, 121, 140, 1)',
      borderWidth: 0
    };

    const faturamentoData = {
      labels: this.empresa.financeiro.faturamento.datas,
      datasets: [entradaData]
    };

    const chartOptions = {
      scales: {
        xAxes: [{
          barPercentage: 1,
          categoryPercentage: 0.6,
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    };

    const ctx = this.canvasFaturamento.nativeElement.getContext('2d');
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: faturamentoData,
      options: chartOptions
    });
  }

  displayRating() {
    const entradaData = {
      data: this.empresa.analise.valor,
      borderColor: 'rgba(242, 122, 48, 1)',
      fill: false
    };

    const ratingData = {
      labels: this.empresa.analise.info,
      datasets: [entradaData]
    };

    const chartOptions = {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    };

    const ctx = this.canvasRating.nativeElement.getContext('2d');
    const barChart = new Chart(ctx, {
      type: 'radar',
      data: ratingData,
      options: chartOptions
    });
  }

  displayParcelas() {
    this.parcelas = [];
    let pago = this.empresa.investido.parcelas.pago;
    let atraso = this.empresa.investido.parcelas.atraso;

    let status = 'default';
    if (pago > 0) {
      status = 'pago';
    } else if (atraso > 0) {
      status = 'atraso';
    }

    for (let i = 0; i < this.empresa.investido.parcelas.total; i++) {
      const parcela = {
        valor: this.empresa.investido.parcelas.valor,
        status: status
      };
      this.parcelas.push(parcela);

      if (pago === 0) {
        if (atraso === 0) {
          status = 'default';
        } else {
          atraso--;
          status = 'atraso';
        }
      } else {
        pago--;
      }
    }
  }

}
