import { NgModule } from '@angular/core';
import { LivrosComponent } from './livros/livros.component';
import { Routes, RouterModule } from '@angular/router';
import { LivroDetalheComponent } from './livros/livro-detalhe/livro-detalhe.component';
import { LivroFormularioComponent } from './livro-formulario/livro-formulario.component';


const appRouter: Routes = [
    { path: 'livros', component: LivrosComponent },
    { path: 'livros/:id', component: LivroDetalheComponent },
    {path: 'livros/:id/editar', component: LivroFormularioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRouter, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}

