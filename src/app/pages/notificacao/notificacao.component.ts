import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MensagemComponent } from './mensagem/mensagem.component';
import { user } from 'app/GlobalVariables';
import { UserService } from '../../_service/user/user.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  private mensagens;

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    userService.getMensagens().subscribe((resp) => {
      this.mensagens = resp;
    });
  }

  ngOnInit() {
  }

  openMsg(msg): void {
    // this.notificacaoService.readMsg(msg);
    const msgRef = this.dialog.open(MensagemComponent, {
      // width: '80%',
      // height: '100vh',
      // maxWidth: '100vw',
      data: { msg: msg }
    });

    msgRef.afterClosed().subscribe(result => {
      // console.log(msg.id);
      if (!msg.lida) {
        this.userService.readMsg(msg.id);
      }
    });
  }

}
