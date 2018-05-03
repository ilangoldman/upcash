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
  @ViewChild('sidenav') sidenav: MatSidenav;
  private user;
  private activePage = 'Home';

  private userMenuIcon = 'keyboard_arrow_down';
  private mainUserMenu = [
    {
      icon: 'account_circle',
      text: 'Meus dados',
      page: 'configuracoes'
    },
    {
      icon: 'vpn_key',
      text: 'Alterar dados de Acesso',
      page: 'configAcesso'
    },
    {
      icon: 'announcement',
      text: 'Notificações',
      page: 'notificacoes'
    },
    {
      icon: 'exit_to_app',
      text: 'Sair',
      page: 'logout'
    }

  ];

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
      // subitem: {
      //   text: 'Carteira',
      //   page: 'carteira'
      // }
    },
    {
      icon: 'monetization_on',
      text: 'Investimentos',
      page: 'investimento'
    },
    // {
    //   icon: 'account_circle',
    //   text: 'Perfil',
    //   page: 'perfil'
    // },
    // {
    //   icon: 'settings',
    //   text: 'Configurações',
    //   page: 'configuracoes'
    // },
    // {
    //   icon: 'announcement',
    //   text: 'Notificações',
    //   page: 'notificacoes'
    // },
    // {
    //   icon: 'help',
    //   text: 'Suporte',
    //   page: ''
    // }
  ];

  private activeItem;

  constructor(
    private router: Router,
    private userService: UserService,
    private loginService: LoginService
  ) {
    // this.activeItem = this.mainSideNav[1];
    if (!loginService.isLogged()) {
      this.router.navigate(['']);
    }
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
    if (url.page === 'logout') {
      this.loginService.logout();
      this.router.navigate(['']);
    } else {
      this.activePage = url.text;
      this.router.navigate(['/investidor/' + url.page]);
    }
    this.sidenav.close();
  }

  openUserMenu() {
    this.userMenuIcon = 'keyboard_arrow_up';
  }

  closeUserMenu() {
    this.userMenuIcon = 'keyboard_arrow_down';
  }

}
