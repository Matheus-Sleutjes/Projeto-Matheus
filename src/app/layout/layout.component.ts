import { Component, OnInit } from '@angular/core';
import { navItens } from './itens';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  public itens = navItens;
  constructor() {}

  ngOnInit(): void {}
}
