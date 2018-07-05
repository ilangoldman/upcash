import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user/user.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {
  private newEmail = new FormControl('', [Validators.required, Validators.email]);
  private checkEmail = new FormControl('', [Validators.required, Validators.email]);

  private pwd = new FormControl('', [Validators.required]);
  private newPwd = new FormControl('', [Validators.required]);
  private checkPwd = new FormControl('', [Validators.required]);

  constructor(
    private user: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackBar(message) {
    this.snackBar.open(message, '', { duration: 5000 });
  }

  saveEmail() {
    if (!this.newEmail.invalid && !this.checkEmail.invalid) {
      // this.user.alterarEmail(this.newEmail.value);
      this.openSnackBar('Email alterado com sucesso!');

    } else {
      this.newEmail.markAsTouched();
      this.checkEmail.markAsTouched();
    }
  }

  // savePwd() {
  //   if (!this.pwd.invalid &&
  //     this.loginService.validarUsuario(this.user.email, this.pwd.value)) {
  //     this.pwd.setErrors(null);
  //   } else {
  //     this.pwd.setErrors({ 'pwd' : true });
  //     this.pwd.markAsTouched();
  //   }

  //   if (!this.pwd.invalid &&
  //       !this.newPwd.invalid &&
  //       !this.checkPwd.invalid) {
  //     this.userService.alterarSenha(this.pwd.value, this.newPwd.value);
  //     this.openSnackBar('Senha alterada com sucesso!');

  //   } else {
  //     this.newPwd.markAsTouched();
  //     this.checkPwd.markAsTouched();
  //   }
  // }

  checkData(data, check) {
    if (data.value === check) {
      data.setErrors(null);
    } else {
      data.setErrors({ 'check': true });
    }
  }

  getErrorMessage(data) {
    return data.hasError('required') ? 'Esse campo é necessário' :
      data.hasError('check') ? 'Os campos não são iguais' :
      data.hasError('email') ? 'Esse não é um email válido' :
      data.hasError('pwd') ? 'A senha está incorreta' :
      '';
  }

}
