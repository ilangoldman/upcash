import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../_service/auth/auth.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

  constructor(
    private user: UserService,
    private location: Location,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut()
      .then((res) => {
        this.router.navigate(['']);
      }).catch((err) => {
        console.log(err);
      });
  }

  goback() {
    this.location.back();
  }
}
