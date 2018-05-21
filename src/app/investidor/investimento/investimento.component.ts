import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from 'app/_service/investimento/investimento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PerfilEmpresaComponent } from 'app/empresa/perfil-empresa/perfil-empresa.component';
import { InvestirComponent } from '../investir/investir.component';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {
  private investimentos;

  constructor(
    private investimentoService: InvestimentoService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getInvestimento();
  }

  // gotoEmpresa(id) {
  //   this.router.navigate(['/investidor/empresa/' + id]);
  // }

  getInvestimento() {
    this.investimentos = this.investimentoService.getOportunidade();
  }

  search(value) {
    this.investimentos = this.investimentoService.getOportunidade().filter((x) => (x.nome.toLowerCase().match(value.toLowerCase())));
  }

}
