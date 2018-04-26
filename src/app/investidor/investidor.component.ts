import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_service/user/user.service';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-investidor',
  templateUrl: './investidor.component.html',
  styleUrls: ['./investidor.component.css']
})
export class InvestidorComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private user;

  private mainSideNav = [
    {
      icon: 'home',
      text: 'Home',
      page: 'home'
    },
    {
      icon: 'account_balance_wallet',
      text: 'Carteira',
      page: 'carteira'
    },
    {
      icon: 'monetization_on',
      text: 'Investimentos',
      page: 'investimento'
    },
    {
      icon: 'account_circle',
      text: 'Perfil',
      page: 'perfil'
    },
    {
      icon: 'settings',
      text: 'Configurações',
      page: 'configuracoes'
    },
    {
      icon: 'announcement',
      text: 'Notificações',
      page: 'notificacoes'
    },
    // {
    //   icon: 'help',
    //   text: 'Suporte',
    //   page: ''
    // }
  ];

  private activeItem;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.activeItem = this.mainSideNav[1];
  }

  ngOnInit() {
    this.displayUserInfo();
    // this.sidenav.open();
  }

  select(item, event) {
    this.activeItem = item;
    this.sidenav.close();
    this.goto(item.page);
  }

  displayUserInfo() {
    this.user = this.userService.getUser();
  }

  goto(url) {
    this.router.navigate(['/investidor/' + url]);
  }

}
