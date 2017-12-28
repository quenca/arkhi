import { AuthService } from './../../../rotas/src/app/login/auth.service';
import { LivroDetalheComponent } from './livros/livro-detalhe/livro-detalhe.component';
import { MaterializeModule } from 'angular2-materialize';
import { LivrosService } from './livros/livros.service';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LivrosComponent } from './livros/livros.component';
import { LivroFormularioComponent } from './livro-formulario/livro-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LivrosComponent,
    LivroDetalheComponent,
    LivroFormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [AuthService, LivrosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
