import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./common/components/books-list/books-list.component";
import {BookDetailsComponent} from "./common/components/book-details/book-details.component";
import {AddBookComponent} from "./common/components/add-book/add-book.component";
import {UsersComponent} from "./common/components/users/users.component";

const routes: Routes = [
  { path :"users", component : UsersComponent},
  { path :"books-list", component : BooksListComponent},
  { path :"book-details", component : BookDetailsComponent},
  { path :"add-book", component : AddBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
