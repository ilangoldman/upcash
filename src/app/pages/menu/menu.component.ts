import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav, MatDialog } from '@angular/material';
import { UserService } from 'app/_service/user/user.service';
import { LoginService } from 'app/_service/login/login.service';
import { PerfilEmpresaComponent } from '../../empresa/perfil-empresa/perfil-empresa.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private user;
  private activePage = 'Home';

  private userMenuIcon = 'keyboard_arrow_down';
  private mainUserMenu = [
    {
      icon: 'account_circle',
      text: 'Meus dados',
      page: 'configuracao/perfil'
    },
    {
      icon: 'vpn_key',
      text: 'Alterar dados de Acesso',
      page: 'configuracao/acesso'
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

  @Input() menuItems;
  @Input() tipo;
  private activeItem;
  public tabSelected = 0;

  constructor(
    private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    public dialog: MatDialog
  ) {
    if (!loginService.isLogged()) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    if (!this.loginService.checkTipo(this.tipo)) {
      this.router.navigate([this.loginService.getTipo() + '/home']);
    }
    this.displayUserInfo();
    // this.sidenav.open();
  }

  changeTab(index) {
    this.tabSelected = index;
  }

















  select(item, event) {
    this.activeItem = item;
    this.sidenav.close();
    this.goto(item.page);
  }

  displayUserInfo() {
    this.user = this.userService.getUser();
  }

  openPerfilEmpresa(id) {
    const empRef = this.dialog.open(PerfilEmpresaComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      autoFocus: false,
      data: { id: id }
    });

    empRef.afterClosed().subscribe(result => {
      // this.getNotificacoes();
    });
  }

  goto(url) {
    if (url.page !== undefined) {
      if (url.page === 'logout') {
        this.loginService.logout();
        this.router.navigate(['']);
      } else {
        this.activePage = url.text;
        this.router.navigate([this.tipo + '/' + url.page]);
        // this.router.navigate([this.loginService.getTipo() + '/home']);
      }
      this.sidenav.close();
    }
  }

  openUserMenu() {
    this.sidenav.close();
    this.userMenuIcon = 'keyboard_arrow_up';
  }

  closeUserMenu() {
    this.userMenuIcon = 'keyboard_arrow_down';
  }
}
