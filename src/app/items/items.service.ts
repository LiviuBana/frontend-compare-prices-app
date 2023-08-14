import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemInterface } from './item.interface';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  getArticles(searchValue: string): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(
      `https://localhost:7078/api/Products/search-${searchValue}`
    );
  }
}