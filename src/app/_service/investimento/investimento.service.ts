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

  getEmpresa(id) {
    const empresa = {
      id: 3,
      nome: 'Goldman Ltda',
      rating: 7,
      emprestimo: 48000,
      logo: 'logo-emp.jpg',
      taxa: 23,
      prazo: 24,
      obtido: 6000,
      porcentagem: 30,
      valorParcela: 140,
      geral: {
        descricao: 'Nascida em 1991 na cidade de Ribeirão Preto - SP, a SVC Laser sempre esteve focada em trazer as melhores soluções de acordo com o perfil de cada cliente.Atuando inicialmente junto ao segmento gráfico, a empresa se destacou com os produtos das marcas HP e Risograph, conquistando a confiança deste mercado que se caracteriza por uma exigência muito alta de qualidade nas impressões e uma sensibilidade aguçada quanto aos custos de investimento e manutenção das máquinas.',
        motivo: 'Será utilizado na aquisição de novos equipamentos para show room, com ampliação do mesmo e consequente incremento da capacidade de demonstração de nossos produtos e serviços para novos clientes.Além disso, parte do recurso será destinada a implantação de novo sistema de gestão de locação e gestão de help desk com consequente melhora do atendimento do departamento de serviços.',
        acionistas: [
          {
            nome: 'Ilan Goldman',
            porcentagem: 50
          },
          {
            nome: 'Gabriel Radomysler',
            porcentagem: 50
          }
        ],
        garantia: 'Ilan',
        cnpj: '03.980.538/0001-06',
        empregados: 23,
        fundacao: '21/03/2018',
        site: 'up.cash',
        endereco: '	R FIDENCIO RAMOS, 302, Torre B 12º Andar, VILA OLIMPIA, SAO PAULO',
        img: [
          'https://www.nexoos.com.br/thumbor/unsafe/fit-in/750x400/smart/filters:fill(white)/https://br-nexoos.s3.amazonaws.com/uploads_marketplace/image/file/3053/Evento1.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEKbScstl06-yeIMqGFFBGaY9TQVAS7NYqyUzggFsedzZyI40','https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU.jpg'
        ]
      },
      analise: {
        analise: 'bla bla bla',
        colateral: 4,
        carater: 3,
        condicao: 2,
        conexao: 1,
        credito: 5
      },
      financeiro: {
        faturamento: {
          datas: ['jan/18', 'fev/18', 'mar/18', 'abr/18', 'mai/18',
                  'jun/18', 'jul/18', 'ago/18', 'set/18', 'out/18',
                  'nov/18', 'dez/18', 'jan/19'],
          valor: [1234, 21342, 436, 63456, 64326, 6346, 4326, 4326, 7658, 56784, 4325, 8769, 7854]
        },
        divida: {
          datas: ['jan/18', 'fev/18', 'mar/18', 'abr/18', 'mai/18',
            'jun/18', 'jul/18', 'ago/18', 'set/18', 'out/18',
            'nov/18', 'dez/18', 'jan/19'],
          valor: [567, 765, 436, 213, 64536, 457, 576, 765, 987, 987, 534, 5436, 6754]
        },
        ebitda: {
          datas: ['jan/18', 'fev/18', 'mar/18', 'abr/18', 'mai/18',
            'jun/18', 'jul/18', 'ago/18', 'set/18', 'out/18',
            'nov/18', 'dez/18', 'jan/19'],
          valor: [765, 765, 867, 65, 867, 9678, 90, 76, 657, 768, 786, 657, 656]
        },
        descritivo: 'sidbafcnadnfsdaf'
      },
      investido: {
        valor: 2000,
        parcelas: 38,
        totalParcelas: 30,
        pago: 8,
        atraso: 2,
        comprovantes: ''
      }
    };

    return empresa;
  }

}
