import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    // template: '<h2> Course List </h2>',
    templateUrl: 'course-list.component.html'
})
///Implementamos métodos do ciclo de vida
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();
    // this.courses.push(
      // {
      //   id: 1,
      //   name: 'Angular Forms',
      //   imageUrl: '/assets/images/forms.png',
      //   price: 99.99,
      //   code: 'XPS-8796',
      //   duration: 120,
      //   rating: 4.5,
      //   releaseDate: 'November, 2, 2019'
      // },
      // {
      //   id: 2,
      //   name: 'Angular HTTP',
      //   imageUrl: '/assets/images/http.png',
      //   price: 45.99,
      //   code: 'LML-1094',
      //   duration: 80,
      //   rating: 4,
      //   releaseDate: 'December, 4, 2019'
      // },
    // );
  }
}
