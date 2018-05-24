import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_service/user/user.service';
import { MatSidenav } from '@angular/material';
import { LoginService } from '../_service/login/login.service';


@Component({
  selector: 'app-investidor',
  templateUrl: './investidor.component.html',
  styleUrls: ['./investidor.component.css']
})
export class InvestidorComponent implements OnInit {
  private items = [
    {
      icon: 'dashboard',
      text: 'OVERVIEW',
      page: 'home'
    },
    {
      icon: 'account_balance_wallet',
      text: 'CARTEIRA',
      page: 'carteira'
    },
    {
      icon: 'monetization_on',
      text: 'INVESTIMENTOS',
      page: 'investimento'
    },
    {
      icon: 'announcement',
      text: 'NOTIFICAÇÕES',
      page: 'notificacoes'
    },
    {
      icon: 'account_circle',
      text: 'PERFIL',
      page: 'perfil'
    },
  ];

  private tipo = 'investidor';

  constructor(
    private router: Router,
    private userService: UserService,
    private loginService: LoginService
  ) { }

  ngOnInit() {  }

}
