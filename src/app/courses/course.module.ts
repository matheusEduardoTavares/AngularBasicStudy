import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/components/star/star.module";
import { AppPipeModule } from "../shared/pipes/app-pipe.module";
import { CourseListComponent } from "./course-list.component";
import { CoursesInfoComponent } from "./courses.info.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CoursesInfoComponent,
  ],
  ///Outros módulos que esse módulo precisa
  ///para que ele possa existir
  imports: [
    CommonModule,
    FormsModule,
    AppPipeModule,
    StarModule,
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
