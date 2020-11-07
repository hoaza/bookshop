import { Component } from '@angular/core';

import { Book } from './shared/book';

@Component({
  selector: 'wea5-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'BookShop';


  listOn = true;
  detailsOn = false;
  book: Book;

  showList() {
      this.listOn = true;
      this.detailsOn = false;
  }

  showDetails(book: Book) {
      this.listOn = false;
      this.detailsOn = true;
      this.book = book;
  }

}
