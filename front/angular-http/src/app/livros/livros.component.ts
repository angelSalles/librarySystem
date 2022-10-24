import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livro: any;
  livros: any;

  constructor(private livroService: LivroService, private router: Router) {}
  
  ngOnInit() {
    this.getLivro();
  }

  btnClick() {
    this.router.navigateByUrl('/adicionar');
  };

  saveLivro(form: NgForm) {
    if (this.livro.isbn !== undefined) {
      this.livroService.updateLivro(this.livro).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.livroService.saveLivro(this.livro).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getLivro() {
    this.livroService.getLivro().subscribe((livros: Livro[]) => {
      this.livros = livros;
    });
  }

  async getLivroUnico(isbn: any){
    await this.livroService.getLivroByISBN(isbn).subscribe((isbn)=>{
      localStorage.setItem("isbn", JSON.stringify(isbn));
    });
  }

  deleteLivro(livro: Livro) {
    this.livroService.deleteLivro(livro).subscribe(() => {
      this.getLivro();
    });
  }

  editLivro(livro: Livro) {
    this.livro = { ...livro };
  }

  cleanForm(form: NgForm) {
    this.getLivro();
    form.resetForm();
    this.livro = {};
  }

}
