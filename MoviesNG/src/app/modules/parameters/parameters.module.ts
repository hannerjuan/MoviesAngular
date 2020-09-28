import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { MovieCreationComponent } from './movie/movie-creation/movie-creation.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieEditionComponent } from './movie/movie-edition/movie-edition.component';
import { MovieRemoveComponent } from './movie/movie-remove/movie-remove.component';


@NgModule({
  declarations: [MovieCreationComponent, MovieListComponent, MovieEditionComponent, MovieRemoveComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
