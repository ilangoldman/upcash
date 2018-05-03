import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from '../../_service/notificacao/notificacao.service';
import { MatDialog } from '@angular/material';
import { MensagemComponent } from './mensagem/mensagem.component';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  private mensagens;

  constructor(
    private notificacaoService: NotificacaoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getNotificacoes();
  }

  getNotificacoes() {
    this.mensagens = this.notificacaoService.getMensagens();
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
      this.getNotificacoes();
    });
  }

}
