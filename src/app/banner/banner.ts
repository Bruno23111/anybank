import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { BoasVindas } from "../banner/boas-vindas/boas-vindas";
import { Conta } from "./conta/conta";

@Component({
  selector: 'app-banner',
  imports: [BoasVindas, Conta],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  saldo = input.required<number>();
  
}
