import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewLivroComponent } from './add-new-livro/add-new-livro.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
    { path: '', component: LivrosComponent }, // www.exemplo.com.br/
    { path: 'adicionar', component: AddNewLivroComponent}, // www.exemplo.com.br/sobre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
