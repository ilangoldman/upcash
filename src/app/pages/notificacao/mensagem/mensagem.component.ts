import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  private mensagem;

  constructor(
    public dialogRef: MatDialogRef<MensagemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mensagem = data.msg;
  }

  ngOnInit() {
  }

}
