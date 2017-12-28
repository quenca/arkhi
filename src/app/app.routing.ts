import { LivroFormularioComponent } from './livro-formulario/livro-formulario.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroDetalheComponent } from './livros/livro-detalhe/livro-detalhe.component';
import { LivrosComponent } from './livros/livros.component';
import { HomePageComponent } from './home-page/home-page.component';

const APP_ROUTES: Routes = [
    { path: 'livros', component: LivrosComponent },
    {path: ':id', component: LivroDetalheComponent },
    { path: 'livros/:id', component: LivroDetalheComponent },
    { path: 'livros/:id/editar', component: LivroFormularioComponent },
    { path: '', component: HomePageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
