import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BoasVindas } from "../banner/boas-vindas/boas-vindas";

@Component({
  selector: 'app-banner',
  imports: [BoasVindas],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  
}
