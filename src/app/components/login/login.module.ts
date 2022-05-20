import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    // BrowserModule,
    NgbModule,
    // BrowserAnimationsModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatMenuModule,
  ],
  providers: [LoginComponent],
})
export class LoginModule {}
