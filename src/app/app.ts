import { Component, computed, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from "./form-nova-transacao/form-nova-transacao";
import { TipoTransacao, Transacao } from './modelos/transacao';
import { Erros } from "./erros/erros";
import { Extrato } from "./extrato/extrato";

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao, Erros, Extrato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  transacoes = signal<Transacao[]>([]);
  erro = signal<string | null>(null);
  mostrarPopup = signal(false);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;

        case TipoTransacao.SAQUE:
          if((acc - transacaoAtual.valor) < transacaoAtual.valor) {
            console.log("Saldo insuficiente!");
          }
          return acc - transacaoAtual.valor;

        default:
          throw new Error('Tipo de transação não identificado');
      }

    }, 0);
  });



  processarTransacao(transacao: Transacao) {
    this.erro.set(null);

    const saldoAtual = this.saldo();

    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > saldoAtual) {
      this.erro.set("Saldo insuficiente");
      this.mostrarPopup.set(true);
      return;
    }

    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
    console.log(this.transacoes());
  }

  fecharPopup() {
    this.mostrarPopup.set(false);
  }
}
