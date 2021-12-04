import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'courses.info.component.html',
})
export class CoursesInfoComponent implements OnInit{
  courseId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.courseId = Number(this.route.snapshot.paramMap.get('id')!);
    this.courseId = +this.route.snapshot.paramMap.get('id')!;
  }

}
