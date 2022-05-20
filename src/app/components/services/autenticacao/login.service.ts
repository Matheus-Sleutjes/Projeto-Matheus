import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private router: Router) { }

logOut() {
  this.clearLocalSTorage();
  this.router.navigateByUrl("/login");
}

clearLocalSTorage(){
  localStorage.clear();
  localStorage.removeItem("user");
  localStorage.removeItem("cge-auth_token");
  localStorage.removeItem("cge-auth_token_validate");
}
}
