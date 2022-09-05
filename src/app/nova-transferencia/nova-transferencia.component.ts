import { Transferencia } from './../models/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(
    private transfrenciaService: TransferenciasService,
    private router: Router) { }

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.transfrenciaService.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
