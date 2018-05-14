import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PerfilEmpresaComponent } from '../../empresa/perfil-empresa/perfil-empresa.component';
import { InvestirComponent } from '../../investidor/investir/investir.component';

@Component({
  selector: 'app-card-emprestimo',
  templateUrl: './card-emprestimo.component.html',
  styleUrls: ['./card-emprestimo.component.css']
})
export class CardEmprestimoComponent implements OnInit {
  @Input() empresa;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
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

}
