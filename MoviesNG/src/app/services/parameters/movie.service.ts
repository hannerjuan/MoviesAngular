import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieModel } from '../../models/parameters/movie.model';
import { ServiceConfig } from '../../config/service-config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  entity='movies'

  constructor(
    public http: HttpClient
  ) { }

  // GET ALL RECORDS OF MOVIE
  getAllRecords(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(
      `${ServiceConfig.BASE_URL}${this.entity}`
    );
  }

  // SAVE NEW RECORD 
  // FALTA EL TOKEN DENTRO DEL HEADER
  saveNewRecord(record: MovieModel): Observable<MovieModel> {
    return this.http.post<MovieModel>(
      `${ServiceConfig.BASE_URL}${this.entity}`,
      record,
      {
        headers: new HttpHeaders({
        }),
      }
    );
  }
  // EDIT RECORD 
  // FALTA EL TOKEN DENTRO DEL HEADER
  editRecord(record: MovieModel): Observable<MovieModel> {
    return this.http.put<MovieModel>(
      `${ServiceConfig.BASE_URL}${this.entity}`,
      record,
      {
        headers: new HttpHeaders({
        }),
      }
    );
  }
  // DELETE RECORD
  // FALTA EL TOKEN DENTRO DEL HEADER
  // tslint:disable-next-line: ban-types
  deleteRecord(recordId: String): Observable<any> {
    return this.http.delete(
      `${ServiceConfig.BASE_URL}${this.entity}/${recordId}`,
      {
        headers: new HttpHeaders({
        }),
      }
    );
  }

}
