import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-erros',
  imports: [NgIf],
  templateUrl: './erros.html',
  styleUrl: './erros.css',
})
export class Erros {
  @Input() mensagem: string | null = null;
  @Input() mostrar: boolean = false;

  teste = input<string>();

  @Output() fechar = new EventEmitter<void>();

  fecharPopup() {
    this.fechar.emit();
  }
}
