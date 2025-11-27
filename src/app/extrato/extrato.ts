import { Component, input } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao";
import { Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  imports: [TransacaoComponent],
  templateUrl: './extrato.html',
  styleUrl: './extrato.css',
})
export class Extrato {
  transacoes = input.required<Transacao[]>();
}
