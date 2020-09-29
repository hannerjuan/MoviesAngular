import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './public/home/default/default.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: DefaultComponent
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/parameters/parameters-routing.module').then(m => m.ParametersRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
