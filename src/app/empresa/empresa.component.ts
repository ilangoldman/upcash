import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user/user.service';
import { AuthService } from '../_service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  private items = [
    // {
    //   icon: 'dashboard',
    //   text: 'OVERVIEW',
    //   page: 'home'
    // },
    {
      icon: 'account_balance_wallet',
      text: 'CARTEIRA',
      page: 'carteira'
    },
    {
      icon: 'monetization_on',
      text: 'RECEBIVEIS',
      page: 'recebiveis'
    },
    {
      icon: 'announcement',
      text: 'NOTIFICAÇÕES',
      page: 'notificacoes'
    },
    {
      icon: 'settings',
      text: 'CONFIGURAÇÕES',
      page: 'configuracao'
    },
  ];

  // private tipo = 'empresa';

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    // if (auth.authenticated) {
    //   userService.getEmpresa(auth.currentUserId);
    // }
    // else {
    //   router.navigate(['']);
    // }
  }

  ngOnInit() {
  }

}
