import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] =[];

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getListBooks()
    .subscribe(data =>{
      this.books = data;
    })
  }

}
