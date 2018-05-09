import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { InvestimentoService } from 'app/_service/investimento/investimento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PerfilEmpresaComponent } from 'app/empresa/perfil-empresa/perfil-empresa.component';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {
  @ViewChild('carteiraChart') canvasCarteira: ElementRef;
  @ViewChild('movimentacaoChart') canvasMovimentacao: ElementRef;

  private investimentos;
  // displayedColumns = ['nome', 'investido', 'emprestimo', 'status'];

  constructor(
    private investimentoService: InvestimentoService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.displayCarteira();
    // this.displayMovimentacao();
    this.getInvestimento();
  }

  // gotoEmpresa(id) {
  //   this.router.navigate(['/investidor/empresa/' + id]);
  // }

  openEmpresa(id) {
    const empRef = this.dialog.open(PerfilEmpresaComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      autoFocus: false,
      data: { id: id }
    });

    empRef.afterClosed().subscribe(result => {
      // this.getNotificacoes();
    });
  }

  search(value) {
    this.investimentos = this.investimentoService.getInvestimento().filter((x) => (x.nome.toLowerCase().match(value.toLowerCase())));
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

  getInvestimento() {
    this.investimentos = this.investimentoService.getInvestimento();
  }

  displayCarteira() {
    const carteira = this.investimentoService.getDistribuicaoCarteira('');
    // tslint:disable-next-line:no-unused-expression
    const ctx = this.canvasCarteira.nativeElement.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: carteira.rating,
        datasets: [
          {
            data: carteira.quantidade,
            backgroundColor: carteira.cor
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'right'
        },
        maintainAspectRatio: false,
        'onClick': function (evt, item) {
          // console.log(evt);
          // console.log(item);
          const chartData = item[0]['_chart'].config.data;
          const index = item[0]['_index'];

          const label = chartData.labels[index];
          // updateGraph(label);
          // let i: InvestimentoService;
          // const carteira = i.getDistribuicaoCarteira(label);
          // this.removeData(this.walletChart);
          // this.addData(this.walletChart, carteira.rating, carteira.quantidade);
          // var value = chartData.datasets[0].data[index];

        }
      }
    });
  }

  displayMovimentacao() {
    const movimentacao = this.investimentoService.getMovimentacao();

    const entradaData = {
      label: 'Entrada',
      data: movimentacao.entrada,
      backgroundColor: 'rgba(64, 121, 140, 1)',
      borderWidth: 0
    };

    const saidaData = {
      label: 'Saída',
      data: movimentacao.saida,
      backgroundColor: 'rgba(242, 122, 48, 1)',
      borderWidth: 0
    };

    const movimentacaoData = {
      labels: movimentacao.datas,
      datasets: [entradaData, saidaData]
    };

    const chartOptions = {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          barPercentage: 1,
          categoryPercentage: 0.6,
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }],
      }
    };

    const ctx = this.canvasMovimentacao.nativeElement.getContext('2d');
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: movimentacaoData,
      options: chartOptions
    });
  }

}
