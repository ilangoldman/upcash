import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InvestirComponent } from '../../investidor/investimento/investir/investir.component';
import { DetalheEmprestimoComponent } from '../../investidor/investimento/detalhe-emprestimo/detalhe-emprestimo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-emprestimo',
  templateUrl: './card-emprestimo.component.html',
  styleUrls: ['./card-emprestimo.component.css']
})
export class CardEmprestimoComponent implements OnInit {
  @Input() empresa;

  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.openEmpresa(2);
  }

  openEmpresa(id) {
    this.router.navigate(['detalhe-empresa/' + id]);
    // const empRef = this.dialog.open(DetalheEmprestimoComponent, {
    //   width: '100vw',
    //   height: '100vh',
    //   maxWidth: '100vw',
    //   autoFocus: false,
    //   data: { id: id }
    // });

    // empRef.afterClosed().subscribe(result => {
    //   // this.getNotificacoes();
    // });
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

}
