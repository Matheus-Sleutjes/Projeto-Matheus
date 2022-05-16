import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadoComponent } from './certificado/certificado.component';

//rotas
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [
    CertificadoComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
