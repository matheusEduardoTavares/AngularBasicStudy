import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        ///O path em branco o angular entende que é raíz do path (localhost:4200),
        ///e ela irá apontar para o componente de curso, e devido o uso do
        ///redirecTo, é obrigatório passar o pathMatch.
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      ///Quando não encontrar uma rota, é redirecionado para **
      // {
      //   path: '**',
      //   component: Error404Component
      // },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
