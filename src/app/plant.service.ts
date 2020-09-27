import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Plant } from './plant';

@Injectable({ providedIn: 'root' })
export class PlantService {
  // private plantsUrl = 'api/plants';
  private plantsUrl = 'http://localhost:8080/api/plants';

  httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.plantsUrl}/all`)
      .pipe(
        catchError(this.handleError<Plant[]>('getPlants', []))
      );
  }

  getPlant(id: number): Observable<Plant> {
    const url = `${this.plantsUrl}/id=${id}`;
    return this.http.get<Plant>(url)
      .pipe(
        catchError(this.handleError<Plant>(`getPlant id=${id}`))
      );
  }

  deletePlant(plant: Plant | number): Observable<Plant> {
    const id = typeof plant === 'number' ? plant : plant.id;
    const url = `${this.plantsUrl}/${id}`;

    return this.http.delete<Plant>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Plant>('deletePlant'))
      );
  }

  searchPlants(term: string): Observable<Plant[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Plant[]>(`${this.plantsUrl}/?common_name=${term}`)
      .pipe(
        catchError(this.handleError<Plant[]>('searchPlants', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
