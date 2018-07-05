import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  config = 'cadastro';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goto(url) {
    this.router.navigate([url]);
  }


}
