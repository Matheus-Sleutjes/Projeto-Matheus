import { AppComponent } from './../../app.component';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AutenticarModel } from 'src/app/models/autenticacao/autenticar.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;
  socialUser!: SocialUser;
  isLoggedin: boolean = false;
  model = {} as AutenticarModel;

  constructor(
    private app: AppComponent,
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private socialAuthService: SocialAuthService
  ) //public autenticacaoService: AutenticacaoService
  {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    let token = localStorage.getItem('cge-auth_token');
    if (token !== null && token !== '') {
      this.ativaMenu();
    }
  }

  loginWithGoogle(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      let login = new AutenticarModel();

      this.spinner.show();
      login.idGoogle = user.idToken;
      //   this.autenticacaoService.loginGoogle(login).subscribe(
      //       () => {
      //       this.router.navigateByUrl('/home')
      //     })
    });

    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  public login(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.ativaMenu();
    // this.autenticacaoService.login(this.model).subscribe(
    //   () => {
    //     this.router.navigateByUrl('/home');
    //   }
    // );
  }

  ativaMenu() {
    this.app.onRedirect('home');
  }
}
