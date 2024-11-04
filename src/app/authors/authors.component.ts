import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BooksService} from '../books/service/books.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorId: number | null = null;
  author: Author | null = null;
  errorMessage: string = '';

  constructor(private booksService: BooksService) {}

  searchAuthor() {
    if (this.authorId) {
      this.booksService.getAuthorById(this.authorId).subscribe({
        next: (data: Author) => {
          this.author = data;
          this.errorMessage = '';
        },
        error: () => {
          this.author = null;
          this.errorMessage = 'Author not found.';
        }
      });
    }
  }
}
