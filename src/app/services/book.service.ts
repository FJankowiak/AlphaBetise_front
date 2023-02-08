import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book'

@Injectable({
  providedIn: 'root'
})
export class BookService {
 private baseUrl = 'http://localhost:8080/livres/books-list';

  constructor(private httpClient: HttpClient) { }

  // return books list
  getListBooks() :Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}`);
  }
}
