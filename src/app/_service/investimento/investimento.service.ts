import { Injectable } from '@angular/core';

@Injectable()
export class InvestimentoService {

  constructor() { }

  investir(id, oferta) {
    console.log('Investido em ' + id + ': R$' + oferta);
    return true;
  }

  getResumoInvestir(id) {
    const investir = {
      empresa: 'Nascetur Ridiculus Mus Institute',
      ofertas: {
        min: 500,
        max: 4000,
        step: 500
      },
      taxa: 32.2,
      parcelas: {
        total: 24,
        valor: 138
      },
      retorno: {
        bruto: 2400,
        liquido: 2200
      },
      imposto: 234
    };
    return investir;
  }

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

  getResumoMovimentacao() {
    const movimentacao = {
      entrada: [50, 100, 540, 420, 650, 320, 260],
      saida: [-200, -500, -200, -300, -100, 0, -300],
      datas: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul']
    };
    return movimentacao;
  }

  getMovimentacao() {
    const movimentacao = [
      {
        data: '12/06/2018',
        total: -7900,
        investido: [
          {
            empresa: 'Ananke Tecnologia',
            valor: 2000
          },
          {
            empresa: 'Line Up Logística Consulting',
            valor: 6000
          }
        ],
        parcelas: [
          {
            empresa: 'Line Up Logística Consulting',
            status: 'pago',
            num: 5,
            total: 24,
            bruto: 102.18,
            principal: 100.42,
            Rendimentos: 1.76,
            ir: 0.40,
            liquido: 101.78
          },
          {
            empresa: 'Line Up Logística Consulting',
            status: 'atraso',
            num: 2,
            total: 24,
            bruto: 102.65,
            principal: 100.84,
            Rendimentos: 1.81,
            ir: 0.41,
            liquido: 102.24
          },
        ]
      },
      {
        data: '15/06/2018',
        total: -2000,
        investido: [
          {
            empresa: 'Ananke Tecnologia',
            valor: 2000
          }
        ],
        // parcelas: [ ]
      },
      {
        data: '20/06/2018',
        total: 204.58,
        parcelas: [
          {
            empresa: 'Line Up Logística Consulting',
            status: 'pago',
            num: 5,
            total: 24,
            bruto: 102.18,
            principal: 100.42,
            Rendimentos: 1.76,
            ir: 0.40,
            liquido: 101.78
          },
          {
            empresa: 'Line Up Logística Consulting',
            status: 'atraso',
            num: 2,
            total: 24,
            bruto: 102.65,
            principal: 100.84,
            Rendimentos: 1.81,
            ir: 0.41,
            liquido: 102.24
          },
        ]
      },
      {
        data: '12/06/2018',
        total: -10000,
        investido: [
          {
            empresa: 'Ananke Tecnologia',
            valor: 2000
          },
          {
            empresa: 'Line Up Logística Consulting',
            valor: 6000
          }
        ],
        parcelas: [
          {
            empresa: 'Ananke Tecnologia',
            status: 'pago',
            num: 5,
            total: 24,
            bruto: 102.18,
            principal: 100.42,
            Rendimentos: 1.76,
            ir: 0.40,
            liquido: 101.78
          },
          {
            empresa: 'Line Up Logística Consulting',
            status: 'pago',
            num: 2,
            total: 24,
            bruto: 102.65,
            principal: 100.84,
            Rendimentos: 1.81,
            ir: 0.41,
            liquido: 102.24
          },
        ]
      },
    ];
    return movimentacao;
  }

  getInvestimento() {
    const investimento = [
      {
        id: 0,
        nome: 'Duis Dignissim Company',
        cnpj: '29912445099',
        rating: 2,
        taxa: 0.24,
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
        taxa: 0.24,
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
        taxa: 0.24,
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
        taxa: 0.24,
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
        taxa: 0.2456,
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
        taxa: 0.24,
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
        total: 137000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 30
      },
      {
        id: 1,
        nome: 'Aliquam Erat Institute',
        rating: 12,
        total: 98000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 100
      },
      {
        id: 2,
        nome: 'Nascetur Ridiculus Mus Institute',
        rating: 8,
        total: 44000,
        logo: 'logo-emp.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 0
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 1
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 99
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
        porcentagem: 30
      },
      {
        id: 3,
        nome: 'Integer LLC',
        rating: 7,
        total: 48000,
        logo: 'logo-emp2.jpg',
        taxa: 23,
        prazo: 24,
        investido: 6000,
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
      total: 48000,
      logo: 'logo-emp.jpg',
      taxa: 23,
      prazo: 24,
      recebido: 6000,
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
        avalista: 'Ilan',
        cnpj: '03.980.538/0001-06',
        empregados: 23,
        fundacao: '21/03/2018',
        site: 'up.cash',
        endereco: '	R FIDENCIO RAMOS, 302, Torre B 12º Andar, VILA OLIMPIA, SAO PAULO',
        img: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEKbScstl06-yeIMqGFFBGaY9TQVAS7NYqyUzggFsedzZyI40','https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU.jpg'
        ]
      },
      analise: {
        comentario: 'bla bla bla',
        info: ['colateral', 'carater', 'condicao', 'conexao', 'credito'],
        valor: [4, 3, 2, 1, 5]
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
        descritivo: 'sidbafcnadnfsdaf',
        highlights: [
          {
            info: 'Receita Líquida',
            d3: '28.897.921',
            d2: '32.052.262',
            d1: '38.195.547',
          },
          {
            info: 'EBITDA',
            d3: '- 15.358.129',
            d2: '- 3.272.080',
            d1: '- 3.752.532',
          },
          {
            info: 'Resultado Líquido',
            d3: '- 16.400.083',
            d2: '4.033.488',
            d1: '- 5.883.340',
          },
          {
            info: 'Ativo Circulante',
            d3: '8.181.057',
            d2: '14.283.323',
            d1: '21.530.178',
          },
          {
            info: 'Disponibilidades',
            d3: '408.063',
            d2: '1.038.323',
            d1: '298.555',
          },
          {
            info: 'Passivo Circulante',
            d3: '17.796.816',
            d2: '16.391.846',
            d1: '35.236.683',
          },
          {
            info: 'Dívidas de Curto Prazo',
            d3: '789.038',
            d2: '3.350.037',
            d1: '6.408.409',
          },
          {
            info: 'Dívidas de Longo Prazo',
            d3: '206.037',
            d2: '0',
            d1: '0',
          },
          {
            info: 'Patrimonio Líquido',
            d3: '- 800.662',
            d2: '20.887.840',
            d1: '- 4.611.371',
          },
          {
            info: 'Capital Social',
            d3: '12.302.092',
            d2: '28.002.108',
            d1: '1.069.668',
          },
          {
            info: 'Margem EBITDA',
            d3: '- 53 %',
            d2: '- 10 %',
            d1: '- 10 %',
          },
          {
            info: 'Dívida Total / PL',
            d3: '-1.24',
            d2: '0.16',
            d1: '- 1.63',
          },
          {
            info: 'Dívida Líquida / EBITDA',
            d3: '- 0.04',
            d2: '- 0.71',
            d1: '-1.39',
          },
          {
            info: 'Liquidez Corrente',
            d3: '0.46',
            d2: '0.87',
            d1: '0.61'
          }
        ]
      },
      investido: {
        valor: 2000,
        comprovantes: '',
        parcelas: {
          valor: 138,
          total: 24,
          pago: 8,
          atraso: 2
        }
      }
    };

    return empresa;
  }

}
