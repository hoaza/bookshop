import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'a.wea5-book-list-item',
  templateUrl: './book-list-item.component.html',
  styles: [
  ]
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
