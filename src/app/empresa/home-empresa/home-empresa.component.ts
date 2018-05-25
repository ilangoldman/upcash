import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../_service/emprestimo/emprestimo.service';
import { Router } from '@angular/router';
import { NotificacaoService } from '../../_service/notificacao/notificacao.service';
import { MatDialog } from '@angular/material';
import { MensagemComponent } from '../../pages/notificacao/mensagem/mensagem.component';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css']
})
export class HomeEmpresaComponent implements OnInit {
  public emprestimos;
  public proximo;
  public mensagens;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private emprestimoService: EmprestimoService,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit() {
    this.displayResumoEmprestimos();
    this.displayProxParcela();
    this.displayMensagens();
  }

  displayResumoEmprestimos() {
    this.emprestimos = this.emprestimoService.getResumoEmprestimos();
  }

  displayProxParcela() {
    const emprestimo = this.emprestimoService.getPagamento();
    for (let i = 0; i < emprestimo.parcelas.length; i++) {
      if (emprestimo.parcelas[i].status === 'pendente') {
        this.proximo = emprestimo.parcelas[i];
        break;
      }
    }
  }

  displayMensagens() {
    this.mensagens = this.notificacaoService.getResumoMensagens();
  }

  percent(valorEmprestimo) {
    return (valorEmprestimo / this.emprestimos.total) * 100 - 2;
  }

  openMsg(msg): void {
    this.notificacaoService.readMsg(msg);
    const msgRef = this.dialog.open(MensagemComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      data: { msg: msg }
    });

    msgRef.afterClosed().subscribe(result => {
      // this.displayMensagens();
    });
  }

  goto(url) {
    this.router.navigate(['empresa/' + url]);
  }
}
