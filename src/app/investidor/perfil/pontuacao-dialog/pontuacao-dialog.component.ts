import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from '../../../_service/user/user.service';

@Component({
  selector: 'app-pontuacao-dialog',
  templateUrl: './pontuacao-dialog.component.html',
  styleUrls: ['./pontuacao-dialog.component.css']
})
export class PontuacaoDialogComponent implements OnInit {
  private nivel;
  private pontuacao;

  constructor(
    public dialogRef: MatDialogRef<PontuacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {
      this.nivel = data.nivel;
      this.pontuacao = this.userService.getPontuacao();
    }

  ngOnInit() {
  }

}
