import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navItens } from './layout/itens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Projeto-Matheus';

  public itens = navItens;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onRedirect(rota: any) {
    this.router.navigateByUrl(rota);
  }
}
