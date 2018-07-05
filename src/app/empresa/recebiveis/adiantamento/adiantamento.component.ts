import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { parseString } from 'xml2js';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-adiantamento',
  templateUrl: './adiantamento.component.html',
  styleUrls: ['./adiantamento.component.css']
})
export class AdiantamentoComponent implements OnInit {
  @ViewChild('stepper') stepper;

  private fileForm: FormGroup;
  fileText = 'Clique para adcionar uma Nota Fiscal Eletronica';
  file: any;
  info: any;
  valor = 0;

  constructor(
    public dialogRef: MatDialogRef<AdiantamentoComponent>
  ) {
    this.fileForm = new FormGroup({
      nfe: new FormControl(''),
    });
    this.info = {
      // info nfe
      nfeId: '',
      dtEmissao: '',
      dtEntrega: '',
      // produto: '',
      valorTotal: '',

      // emitido por
      nomeEmit: '',
      cnpjEmit: '',

      // destinatario
      nomeDest: '',
      cnpjDest: ''
    };
  }

  ngOnInit() {
  }

  public onFileInput(event) {
    const elem = event.target;
    if (elem.files.length > 0) {
      this.fileText = elem.files[0].name + ' (' + elem.files[0].size + ' B)';
      // console.log(elem.files[0]);
      this.file = elem.files[0];
    }
  }

  uploadFile() {
    if (this.file.type !== 'text/xml') {
      this.fileText = 'ERRO: Arquivo precisa ser uma NF-e no formato xml';
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      // console.log(fileReader.result);
      // TODO: save complete file on storage
      const thisClass = this;
      parseString(fileReader.result, function (err, result) {
        // console.log(result);
        const nf = result.NFe;
        thisClass.info = {
          // info nfe
          nfeId: nf.infNFe[0].$.Id,
          dtEmissao: nf.infNFe[0].ide[0].dEmi[0],
          dtEntrega: nf.infNFe[0].ide[0].dSaiEnt[0],
          // produto: '',
          valorTotal: nf.infNFe[0].total[0].ICMSTot[0].vProd[0],

          // emitido por
          cnpjEmit: nf.infNFe[0].emit[0].CNPJ[0],
          nomeEmit: nf.infNFe[0].emit[0].xNome[0],

          // destinatario
          cnpjDest: nf.infNFe[0].dest[0].CNPJ[0],
          nomeDest: nf.infNFe[0].dest[0].xNome[0],
        };
        thisClass.valor = thisClass.info.valorTotal * 0.92;
        thisClass.stepper.next();
      });
    };
    fileReader.readAsText(this.file);
  }

  pedir() {
    // TODO: enviar info para API;
    this.dialogRef.close();
  }

}
