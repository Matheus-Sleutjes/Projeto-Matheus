import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navItens } from './layout/itens';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Projeto-Matheus';

  // public login: boolean = true;
  public itens = navItens;
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    ) {}

  ngOnInit(): void {}

  onRedirect(rota: any) {
    this.router.navigateByUrl(rota);
  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.router.navigateByUrl("/");
    // this.login = true;
  }
}
