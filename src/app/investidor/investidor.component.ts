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
      icon: 'home',
      text: 'Home',
      page: 'home'
    },
    {
      icon: 'account_balance_wallet',
      text: 'Carteira',
      // page: 'carteira',
      submenu: [
        {
          text: 'Movimentação',
          page: 'movimentacao'
        },
        {
          text: 'Empresas Investidas',
          page: 'empresas-investidas',
        }
      ]
    },
    {
      icon: 'monetization_on',
      text: 'Investimentos',
      page: 'investimento'
    }
  ];

  private tipo = 'investidor';

  constructor(
    private router: Router,
    private userService: UserService,
    private loginService: LoginService
  ) { }

  ngOnInit() {  }

}
