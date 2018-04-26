import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { MatDialog } from '@angular/material';
import { PontuacaoDialogComponent } from './pontuacao-dialog/pontuacao-dialog.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private user;
  private pontos;
  private beneficios;
  private amigos;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
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

}
