import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'wea5-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;
  @Output() showListEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  showBookList() {
      this.showListEvent.emit();
  }

}
