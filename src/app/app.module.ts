import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './common/components/books-list/books-list.component';
import { AddBookComponent } from './common/components/add-book/add-book.component';
import { BookDetailsComponent } from './common/components/book-details/book-details.component';
import { HeaderComponent } from  './header/header.component';
import { UsersComponent } from './common/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddBookComponent,
    BookDetailsComponent,
    HeaderComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
