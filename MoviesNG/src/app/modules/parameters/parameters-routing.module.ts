import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieCreationComponent} from './movie/movie-creation/movie-creation.component'
import {MovieListComponent} from './movie/movie-list/movie-list.component'
import {MovieEditionComponent} from './movie/movie-edition/movie-edition.component'
import {MovieRemoveComponent} from './movie/movie-remove/movie-remove.component'


const routes: Routes = [
  {
    path: 'movie-creation',
    component: MovieCreationComponent
  },
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: 'movie-edition',
    component: MovieEditionComponent
  },
  {
    path: 'movie-remove',
    component: MovieRemoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
