import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-filtro-movimentacao',
  templateUrl: './filtro-movimentacao.component.html',
  styleUrls: ['./filtro-movimentacao.component.css']
})
export class FiltroMovimentacaoComponent implements OnInit {
  // public tipo;
  fromDate = new FormControl(new Date('10/05/2018'));
  toDate = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<FiltroMovimentacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  filtrar(val, date) {
    console.log(val);
    console.log(date);
    this.dialogRef.close();
  }

}
