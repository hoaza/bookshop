import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'wea5-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  public books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private bookStoreService: BookStoreService) { }

  showDetails(book: Book) {
     this.showDetailsEvent.emit(book);
  }

  ngOnInit() {
    this.books = this.bookStoreService.getAll();
  }

}
