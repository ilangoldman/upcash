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

  investir(id) {
    const dialogRef = this.dialog.open(InvestirComponent, {
      width: '320px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
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
