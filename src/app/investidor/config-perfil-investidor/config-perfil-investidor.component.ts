import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-config-perfil-investidor',
  templateUrl: './config-perfil-investidor.component.html',
  styleUrls: ['./config-perfil-investidor.component.css']
})
export class ConfigPerfilInvestidorComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goback() {
    this.location.back();
  }

}
