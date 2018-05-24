import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  private items = [
    {
      icon: 'dashboard',
      text: 'OVERVIEW',
      page: 'home'
    },
    {
      icon: 'monetization_on',
      text: 'EMPRESTIMOS',
      page: 'emprestimos'
    },
    {
      icon: 'swap_horiz',
      text: 'TRANSFERENCIAS',
      page: 'transferencias'
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

  private tipo = 'empresa';

  constructor() { }

  ngOnInit() {
  }

}
