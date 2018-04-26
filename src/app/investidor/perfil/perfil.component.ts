import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private user;
  private pontos;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.displayUserInfo();
    this.displayPontos();
  }

  displayUserInfo() {
    this.user = this.userService.getUser();
  }

  displayPontos() {
    this.pontos = this.userService.getPontos();
  }

}
