import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { MatDialog } from '@angular/material';
import { PontuacaoDialogComponent } from './pontuacao-dialog/pontuacao-dialog.component';
import { Router } from '@angular/router';
import { LoginService } from '../../_service/login/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilInvestidorComponent implements OnInit {
  private user;
  private pontos;
  private beneficios;
  private amigos;

  private moreOptions = [
    {
      icon: 'help',
      text: 'Suporte',
      action: ''
    },
    {
      icon: 'exit_to_app',
      text: 'Sair',
      action: 'logout'
    }
  ];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.displayUserInfo();
    this.displayPontos();
    this.displayAmigos();
    this.displayBeneficios();
  }

  displayUserInfo() {
    this.user = this.userService.getUser();
  }

  displayPontos() {
    this.pontos = this.userService.getPontos();
  }

  displayAmigos() {
    this.amigos = this.userService.getAmigos();
  }

  displayBeneficios() {
    this.beneficios = this.userService.getBeneficios();
  }

  showPoints() {
    const dialogRef = this.dialog.open(PontuacaoDialogComponent, {
      // width: '250px',
      data: { nivel: this.user.nivel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goto(url) {
    this.router.navigate([url]);
  }

  submenuAction(action) {
    switch (action) {
      case 'logout':
        this.loginService.logout();
        this.router.navigate(['']);
        break;

      default:
        break;
    }
  }

}
