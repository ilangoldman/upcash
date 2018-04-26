import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from '../../_service/investimento/investimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {
  private investimentos;

  constructor(
    private investimentoService: InvestimentoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInvestimento();
  }

  gotoEmpresa(id) {
    // TODO
    // console.log(id);
    this.router.navigate(['/investidor/empresa/' + id]);
  }

  getInvestimento() {
    this.investimentos = this.investimentoService.getOportunidade();
  }

  search(value) {
    this.investimentos = this.investimentoService.getOportunidade().filter((x) => (x.nome.toLowerCase().match(value.toLowerCase())));
  }

}
