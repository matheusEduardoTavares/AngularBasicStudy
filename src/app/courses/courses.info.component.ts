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
    this.course = this.courseService.retrieveById(
      +this.route.snapshot.paramMap.get('id')!
    );
  }

  save(): void {
    this.courseService.save(this.course);
  }

}
