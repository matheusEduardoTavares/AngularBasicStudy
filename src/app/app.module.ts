import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        ///O path em branco o angular entende que é raíz do path (localhost:4200),
        ///e ela irá apontar para o componente de curso, e devido o uso do
        ///redirecTo, é obrigatório passar o pathMatch.
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      ///Rota de /courses
      {
        path: 'courses',
        component: CourseListComponent,
      },
      ///Quando não encontrar uma rota, é redirecionado para **
      {
        path: '**',
        component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
