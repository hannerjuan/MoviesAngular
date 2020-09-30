import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../../../models/parameters/movie.model';
import { MovieService } from '../../../../services/parameters/movie.service';

declare const showMessage: any;

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  recordList: MovieModel[];
  
  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getAllRecords().subscribe(
      data => {
        this.recordList = data;
        console.log(this.recordList);
      },
      error => {
        showMessage(error, 'There was an error with backend communication');
      }
    );
  }

}
