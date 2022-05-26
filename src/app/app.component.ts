import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navItens } from './layout/itens';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'login';
  public itens = navItens;
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    ) {}

  ngOnInit(): void {
  }

  onRedirect(rota: any) {
    this.router.navigateByUrl(rota);
    this.title= rota;
  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.onRedirect("login")
  }
}
