import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  private items = [
    {
      icon: 'home',
      text: 'Home',
      page: 'home'
    },
    {
      icon: 'monetization_on',
      text: 'Emprestimos',
      page: 'emprestimos'
    },
    // cached
    {
      icon: 'swap_horiz',
      text: 'Transferencias',
      page: 'transferencias'
    }
  ];

  private tipo = 'empresa';

  constructor() { }

  ngOnInit() {
  }

}
