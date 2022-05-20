import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, take, tap } from 'rxjs/operators';
import { AutenticarModel } from 'src/app/models/autenticacao/autenticar.model';
import { UsuarioModel } from 'src/app/models/autenticacao/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AutenticacaoService {
  private userSub = new ReplaySubject<UsuarioModel>(1);
  public usuarioLogado$ = this.userSub.asObservable();

constructor(private http: HttpClient) { }

login(login: AutenticarModel) {

  const url = environment.backend + `api/v1/autenticar`;

  return this.http.post<UsuarioModel>(url, login)
    .pipe(
      map((user: UsuarioModel) => {
        this.setCurrentUser(user);
      }),
      catchError(this.handleError)
    );
}

loginGoogle(login: AutenticarModel) {

  const url = environment.backend + `api/v1/autenticar-google`;

  return this.http.post<UsuarioModel>(url, login)
    .pipe(
      map((user: UsuarioModel) => {

        this.setCurrentUser(user);
      }),
      catchError(this.handleError)
    );
}

public setCurrentUser(user: UsuarioModel): void {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('cge-auth_token', user.token);
  localStorage.setItem('cge-auth_token_validate', user.dataExpiracaoToken.toString());
  this.userSub.next(user);
}

handleError(error: any): Observable<never> {
  return throwError(error);
}

logout(): void {
  localStorage.removeItem('user');
  localStorage.removeItem('cge-auth_token');
  localStorage.removeItem('cge-auth_token_validate');
  this.userSub.next(); //tirei o null
  this.userSub.complete();
}

getRotaAdmin(): Observable<string>{
  return this.http
      .get<string>(`${environment.backend}api/v1/rota-admin`)
      .pipe(catchError(this.handleError));
}

getRotaServidor(): Observable<string>{
  return this.http
      .get<string>(`${environment.backend}api/v1/rota-servidor`)
      .pipe(catchError(this.handleError));
}

getRotaAmbos(): Observable<string>{
  return this.http
      .get<string>(`${environment.backend}api/v1/rota-ambos`)
      .pipe(catchError(this.handleError));
}

}
