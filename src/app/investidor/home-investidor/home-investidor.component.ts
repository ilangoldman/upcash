import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { Router } from '@angular/router';
import { NotificacaoService } from '../../_service/notificacao/notificacao.service';
import { MensagemComponent } from '../../pages/notificacao/mensagem/mensagem.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home-investidor',
  templateUrl: './home-investidor.component.html',
  styleUrls: ['./home-investidor.component.css']
})
export class HomeInvestidorComponent implements OnInit {
  public user;
  public mensagens;

  constructor(
    private userService: UserService,
    private router: Router,
    private notificacaoService: NotificacaoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.displayUser();
    this.displayMensagens();
  }

  displayUser() {
    this.user = this.userService.getUser();
  }

  displayMensagens() {
    this.mensagens = this.notificacaoService.getResumoMensagens();
  }

  goto(url) {
    this.router.navigate(['investidor/' + url]);
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
}
