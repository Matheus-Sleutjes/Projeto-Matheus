import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadoComponent } from './components/certificado/certificado.component';
import { DownloadComponent } from './components/download/download.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'certificado', component: CertificadoComponent, data: { title: 'Certificado' } },
  { path: 'download', component: DownloadComponent, data: { title: 'Download' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' }},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
