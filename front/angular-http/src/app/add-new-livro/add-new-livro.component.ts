import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-add-new-livro',
  templateUrl: './add-new-livro.component.html',
  styleUrls: ['./add-new-livro.component.css']
})
export class AddNewLivroComponent implements OnInit {
  
  livroEdit : any;
  livroEditAux : any;

  ngOnInit(): void {
   /* 
    this.livroEdit = localStorage.getItem("isbn");
    this.livroEditAux = JSON.parse(this.livroEdit);
    this.livroEdit = this.livroEditAux.result;
    
    this.bioSection.patchValue({
        isbn: this.livroEdit.isbn, 
        book_name: this.livroEdit.book_name, 
        author: this.livroEdit.author, 
        number_pages: this.livroEdit.number_pages, 
        copies_available: this.livroEdit.copies_available
    });

    localStorage.removeItem("isbn");
    console.log(this.livroEdit);
  */}

  constructor(private livroService: LivroService) { }
      bioSection = new FormGroup({
      isbn: new FormControl(''),
      book_name: new FormControl(''),
      author: new FormControl(''),
      number_pages: new FormControl(''),
      copies_available: new FormControl(''),
    })
    
    callingFunction() {
      console.log(this.bioSection.value);
      this.saveLivro(this.bioSection.value);
      /*if(!this.livroEdit){
        
      }else{
        this.updateLivro(this.bioSection.value);
      }*/
      console.log(this.bioSection.value);
    }

    saveLivro(form: any) {
        this.livroService.saveLivro({
          isbn : form.isbn,
          book_name : form.book_name,
          author : form.author,
          number_pages : +form.number_pages,
          copies_available : +form.copies_available
        }).subscribe(() => {
          
        });
    }

    updateLivro(form: any) {
      this.livroService.updateLivro({
        isbn : form.isbn,
        book_name : form.book_name,
        author : form.author,
        number_pages : +form.number_pages,
        copies_available : +form.copies_available
      }).subscribe(() => {
        
      });
  }
}
