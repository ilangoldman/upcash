import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EmprestimoService } from '../../_service/emprestimo/emprestimo.service';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {
  public info;

  public emprestimos = [];
  public emprestimo = 50000;

  public parcelas = [];
  public parcela = 12;

  public motivo = '';

  constructor(
    public dialogRef: MatDialogRef<SolicitacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private emprestimoService: EmprestimoService
  ) {
    this.info = this.emprestimoService.getTemplateSolicitacao();
    this.displayEmprestimo();
    this.displayParcelas();
  }

  ngOnInit() {
  }

  solicitar(motivoInput) {
    this.emprestimoService.solicitar(this.emprestimo, this.parcela, motivoInput);
    this.dialogRef.close();
  }

  displayEmprestimo() {
    for (let i = this.info.emprestimo.min; i <= this.info.emprestimo.max; i += this.info.emprestimo.step) {
      this.emprestimos.push(i);
    }
  }

  displayParcelas() {
    for (let i = this.info.parcela.min; i <= this.info.parcela.max; i += this.info.parcela.step) {
      this.parcelas.push(i);
    }
  }

}
