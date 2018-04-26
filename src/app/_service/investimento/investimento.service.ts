import { Injectable } from '@angular/core';

@Injectable()
export class InvestimentoService {

  constructor() { }

  getResumoCarteira() {
    const resumoCarteira = {
      retorno: 10.85,
      investimentos: 32,
      finalizados: 10,
      receber: 324234,
      retirado: 324321,
      investido: 2130131
    };
    return resumoCarteira;
  }

  getDistribuicaoCarteira(r) {
    let carteira;
    switch (r) {
      case 'A':
        carteira = {
          rating: ['A1', 'A2', 'A3'],
          quantidade: [17, 30, 23],
          cor: [
            'rgba(26, 194, 176, 1)',
            'rgba(242, 122, 48, 1)',
            'blue',
            'orange',
            'green'
          ]
        };
        break;

      case 'B':
        carteira = {
          rating: ['B1', 'B2', 'B3', 'B3', 'B4', 'B5', 'B6'],
          quantidade: [17, 30, 23, 23, 35, 54],
          cor: [
            'rgba(26, 194, 176, 1)',
            'rgba(242, 122, 48, 1)',
            'blue',
            'orange',
            'green'
          ]
        };
        break;

      case 'A1':
        carteira = {
          rating: ['Morbi Sit Company', 'At Corporation', 'Curabitur Consulting'],
          quantidade: [22400, 93500, 12400],
          cor: [
            'rgba(26, 194, 176, 1)',
            'rgba(242, 122, 48, 1)',
            'blue',
            'orange',
            'green'
          ]
        };
        break;

      default:
        carteira = {
          rating: ['A', 'B', 'C', 'D', 'E'],
          quantidade: [17, 30, 23, 54, 12],
          cor: [
            'rgba(26, 194, 176, 1)',
            'rgba(242, 122, 48, 1)',
            'blue',
            'orange',
            'green'
          ]
        };
        break;
    }
    return carteira;
  }

  getMovimentacao() {
    const movimentacao = {
      entrada: [50, 100, 540, 420, 650, 320, 260],
      saida: [-200, -500, -200, -300, -100, 0, -300],
      datas: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul']
    };
    return movimentacao;
  }

  getInvestimento() {
    const investimento = [
      {
        id: 0,
        nome: 'Duis Dignissim Company',
        cnpj: '29912445099',
        rating: 2,
        emprestimo: 137000,
        investido: 2000,
        status: 'Lista de Espera',
        porcentagem: 30
      },
      {
        id: 1,
        nome: 'Aliquam Erat Institute',
        cnpj: '52314596599',
        rating: 12,
        emprestimo: 98000,
        investido: 2000,
        status: 'Oferta Aceita',
        porcentagem: 76
      },
      {
        id: 2,
        nome: 'Nascetur Ridiculus Mus Institute',
        cnpj: '42243192399',
        rating: 8,
        emprestimo: 44000,
        investido: 2000,
        status: 'Transferencias',
        porcentagem: 0
      },
      {
        id: 3,
        nome: 'Integer LLC',
        cnpj: '2225827099',
        rating: 7,
        emprestimo: 48000,
        investido: 2000,
        status: 'Financiada',
        porcentagem: 100
      },
      {
        id: 4,
        nome: 'Integer LLC',
        cnpj: '2225827099',
        rating: 7,
        emprestimo: 48000,
        investido: 2000,
        status: 'Pago',
        porcentagem: 99
      },
      {
        id: 5,
        nome: 'Integer LLC',
        cnpj: '2225827099',
        rating: 7,
        emprestimo: 48000,
        investido: 2000,
        status: 'Atraso',
        porcentagem: 1
      },
    ];
    return investimento;
  }

  getOportunidade() {
    const oportunidade = [
      {
        id: 0,
        nome: 'Duis Dignissim Company',
        rating: 2,
        emprestimo: 137000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
      {
        id: 1,
        nome: 'Aliquam Erat Institute',
        rating: 12,
        emprestimo: 98000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 100
      },
      {
        id: 2,
        nome: 'Nascetur Ridiculus Mus Institute',
        rating: 8,
        emprestimo: 44000,
        logo: 'logo-emp.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 0
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 1
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 99
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        emprestimo: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        obtido: 6000,
        porcentagem: 30
      },
    ];
    return oportunidade;
  }

}
