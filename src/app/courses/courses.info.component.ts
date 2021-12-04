import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: 'courses.info.component.html',
})
export class CoursesInfoComponent implements OnInit{
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    // this.courseId = Number(this.route.snapshot.paramMap.get('id')!);
    this.courseService.retrieveById(
      +this.route.snapshot.paramMap.get('id')!
    ).subscribe({
      next: course => {
        this.course = course;
      },
      error: err => console.log('Error', err)
    });
  }

  save(): void {
    this.courseService.save(this.course)
      .subscribe({
        next: (course) => console.log('Saved with success', course),
        error: error => console.log('Error', error)
      })
  }

}
