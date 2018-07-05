import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as anime from 'animejs';
import { Router } from '@angular/router';
import * as Global from 'app/GlobalVariables';
import { AuthService } from '../../_service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  loginStatus = '';
  APP_NAME = Global.APP_NAME;
  content = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    // TODO: keep user signed in
  }

  ngOnInit() {
    // const thisC = this;
    // setTimeout(function() {
    //   thisC.splashScreen();

    // }, 500);
    // this.splashScreen();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.splashScreen();
  }


  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Esse campo não pode estar vazio' :
      this.email.hasError('email') ? 'O email não é válido' :
        '';
  }

  login(usuario, senha) {
    this.auth.emailLogin(usuario, senha)
      .then( (res) => {
        this.router.navigate(['empresa/recebiveis']);
      }).catch( (err) => {
        console.log(err);
        this.loginStatus = 'erro';
    });

  }

  clearErro() {
    this.loginStatus = '';
  }

  erroLogin() {
    console.log('erro');
    const t = this;
    // todo mensagem de erro
    t.loginStatus = 'erro';

    // anime({
    //   targets: '#login-button',
    //   rotate: [{
    //     value: '-10deg'
    //   },
    //   {
    //     value: '10deg'
    //   }, {
    //     value: '-10deg'
    //   }, {
    //     value: '10deg'
    //   }, {
    //     value: '-10deg'
    //   },
    //   {
    //     value: '0deg'
    //   }],
    //   duration: 500
    // });
  }

  goto(url) {
    this.router.navigate([url]);
  }

  splashScreen() {
    this.play();

    anime({
      targets: '.logo',
      translateY: -100,
      delay: 3000,
      duration: 3000
    });
    anime({
      targets: ['#content', '.footer'],
      opacity: 1,
      delay: 3500,
      duration: 6000
    });
  }


  play() {
    let current_frame = 0;
    const total_frames = 60;
    const path = new Array();
    const length = new Array();

    for (let i = 0; i < 3; i++) {
      path[i] = document.getElementById('i' + i);
      let l = path[i].getTotalLength();
      length[i] = l;
      path[i].style.strokeDasharray = l + ' ' + l;
      path[i].style.strokeDashoffset = l;
      // path[i].style.fill = "none";
    }

    let handle = 0;

    let draw = function () {
        let progress = current_frame / total_frames;

        if (progress > 1) {
          for (let j = 0; j < path.length; j++) {
            path[j].setAttribute('class', 'fadein');
          }
          window.cancelAnimationFrame(handle);
        } else {
          current_frame++;
          for (let j = 0; j < path.length; j++) {
            path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
            path[j].setAttribute('class', '');
          }
          handle = window.requestAnimationFrame(draw);
        }
      };
    draw();

  }
}
