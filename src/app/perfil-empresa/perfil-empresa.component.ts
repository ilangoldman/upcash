import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from '../_service/investimento/investimento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {
  private empresa;
  private tabSelected = 0;
  private acionistasCol;

  constructor(
    private investimentoService: InvestimentoService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.empresa = this.investimentoService.getEmpresa(params['id']);
      console.log(this.empresa);
      
      this.acionistasCol = Object.keys(this.empresa.geral.acionistas[0]);
      console.log(this.acionistasCol);
      
    });
  }

  ngOnInit() {
  }

  changeTab(index) {
    this.tabSelected = index;
  }
}
