import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  url = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  }

  getLivro(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(`${this.url}/livro`)
  }

  getLivroByISBN(isbn: string): Observable<Livro> {
    return this.httpClient.get<Livro>(this.url + '/livro/' + isbn)
  }

  saveLivro(livro: any): Observable<Livro> {
    console.log(livro)
    let params = new HttpParams();
    params = params.append('isbn', livro.isbn);
    params = params.append('book_name', livro.book_name);
    params = params.append('author', livro.author);
    params = params.append('number_pages', livro.number_pages);
    params = params.append('copies_available', livro.copies_available);
    return this.httpClient.post<Livro>(`${this.url}/newLivro`, {params:params}, this.httpOptions)
  }

  updateLivro(livro: any): Observable<Livro> {

    return this.httpClient.put<Livro>(this.url + '/' + livro.isbn, JSON.stringify(livro), this.httpOptions)
  }

  deleteLivro(livro: any) {
    return this.httpClient.delete<Livro>(this.url + '/' + livro.isbn, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}