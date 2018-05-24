import { Injectable } from '@angular/core';

@Injectable()
export class EmprestimoService {

  constructor() { }

  solicitar(emprestimo, parcela, motivo) {
    console.log('Emprestimo pedido de ' + emprestimo + ' em ' + parcela + ' meses, pq ' + motivo);
  }

  getTemplateSolicitacao() {
    const template = {
      emprestimo: {
        min: 5000,
        max: 1000000,
        step: 5000
      },
      parcela: {
        min: 1,
        max: 48,
        step: 11
      }
    };
    return template;
  }

  getEmprestimoAtual() {
    const e = {
      id: 1,
      motivo: 'Expansão',
      status: 'Solicitado',
      taxa: 3,
      prazo: 24,
      investido: 0,
      total: 50000,
      porcentagem: 0,
      nome: 'Duis Dignissim Company',
      rating: 2,
      logo: 'logo-emp2.jpg'
    };
    return e;
  }

  getEmprestimos() {
    const emprestimos = [
      {
        id: 1,
        motivo: 'Expansão',
        status: 'Solicitado',
        taxa: 3,
        prazo: 24,
        investido: 0,
        total: 50000,
        porcentagem: 0,
        nome: 'Duis Dignissim Company',
        rating: 2,
        logo: 'logo-emp2.jpg'
      },
      {
        id: 2,
        motivo: 'Expansão',
        status: 'Financiado',
        taxa: 3,
        prazo: 24,
        investido: 25000,
        total: 50000,
        porcentagem: 99,
        nome: 'Duis Dignissim Company',
        rating: 2,
        logo: 'logo-emp2.jpg'
      },
      {
        id: 3,
        motivo: 'Expansão',
        status: 'Não Financiado',
        taxa: 3,
        prazo: 24,
        investido: 2350,
        total: 50000,
        porcentagem: 1,
        nome: 'Duis Dignissim Company',
        rating: 2,
        logo: 'logo-emp2.jpg'
      },
      {
        id: 4,
        motivo: 'Expansão',
        status: 'Em pagamento',
        taxa: 3,
        prazo: 24,
        investido: 50000,
        pago: 40000,
        total: 50000,
        porcentagem: 80,
        nome: 'Duis Dignissim Company',
        rating: 2,
        logo: 'logo-emp2.jpg'
      },
      {
        id: 4,
        motivo: 'Expansão',
        status: 'Atraso',
        taxa: 3,
        prazo: 24,
        investido: 50000,
        pago: 40000,
        total: 50000,
        porcentagem: 80,
        nome: 'Duis Dignissim Company',
        rating: 2,
        logo: 'logo-emp2.jpg'
      },
      {
        id: 5,
        motivo: 'Expansão',
        status: 'Concluido',
        taxa: 3,
        prazo: 24,
        investido: 50000,
        pago: 50000,
        total: 50000,
        porcentagem: 100,
        nome: 'Duis Dignissim Company',
        rating: 2,
        logo: 'logo-emp2.jpg'
      }
    ];
    return emprestimos;
  }

  getPagamento() {
    const pagamento = {
      total: 50000,
      pago: 20000,
      valorParcela: 200,
      numParcelas: 12,
      parcelas: [
        {
          status: 'pago',
          data: '20/02/2018',
          valor: 120,
          bruto: 123,
          principal: 89,
          rendimentos: 32,
          multa: 12,
          ir: 0.43,
          liquido: 89
        },
        {
          status: 'pago',
          data: '20/03/2018',
          valor: 120,
          bruto: 123,
          principal: 89,
          rendimentos: 32,
          multa: 12,
          ir: 0.43,
          liquido: 89
        },
        {
          status: 'pago',
          data: '22/04/2018',
          valor: 120,
          bruto: 123,
          principal: 89,
          rendimentos: 32,
          multa: 12,
          ir: 0.43,
          liquido: 89
        },
        {
          status: 'pago',
          data: '21/05/2018',
          valor: 120,
          bruto: 123,
          principal: 89,
          rendimentos: 32,
          multa: 12,
          ir: 0.43,
          liquido: 89
        },
        {
          status: 'atraso',
          data: '20/06/2018',
          valor: 120,
          bruto: 123,
          principal: 89,
          rendimentos: 32,
          multa: 40,
          ir: 0.43,
          liquido: 89
        },
        {
          status: 'pendente',
          data: '20/07/2018',
          valor: 120
        },
        {
          status: 'pendente',
          data: '21/08/2018',
          valor: 120
        },
        {
          status: 'pendente',
          data: '22/09/2018',
          valor: 120
        }
      ]
      };
    // ];
    return pagamento;
  }

  getProximaParcela() {
    const parcela = {
      data: '22/07',
      valor: 300
    };
    return parcela;
  }

}
