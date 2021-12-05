import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipes/replace.pipe";
import { StarComponent } from "../star/star.component";
import { CourseListComponent } from "./course-list.component";
import { CoursesInfoComponent } from "./courses.info.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CoursesInfoComponent,
    StarComponent,
    ReplacePipe,
  ],
  ///Outros módulos que esse módulo precisa
  ///para que ele possa existir
  imports: [
    CommonModule,
    FormsModule,
    ///Como esse não é o módulo pai,
    ///usamos o RouterModule.forChild
    RouterModule.forChild([
      ///Rota de /courses
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CoursesInfoComponent,
      },
    ])
  ],
})
export class CourseModule {

}
