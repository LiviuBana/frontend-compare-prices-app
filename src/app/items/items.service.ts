import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { ItemInterface } from './item.interface';


@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  getArticles(searchValue: string): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(
      `https://localhost:7078/api/Products/search-${searchValue}`
    );
  }
  getProducers():Observable<string[]>{
    return this.http.get<string[]>(
      `https://localhost:7078/api/Products/all-producers`
    ).pipe(delay(1000));
  }
  getModels(searchValue:string):Observable<string[]>{
    return this.http.get<string[]>(
      `https://localhost:7078/api/Products/models-of-${searchValue}`
    ).pipe(delay(2000));
  }
  

}