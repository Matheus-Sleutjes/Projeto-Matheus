import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'layout',
  pathMatch: 'full'
},
{
  path: 'layout',
  component: LayoutComponent,

},
{
  path: 'home',
  component: HomeComponent,
  data: {
    title: 'Home'
  },
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
