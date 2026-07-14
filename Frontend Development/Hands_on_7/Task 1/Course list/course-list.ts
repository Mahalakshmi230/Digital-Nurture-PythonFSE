import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  searchTerm = '';

  courses = [
    {
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      grade: 'A'
    },
    {
      name: 'React',
      code: 'REA201',
      credits: 3,
      grade: 'A+'
    },
    {
      name: 'Java',
      code: 'JAVA301',
      credits: 4,
      grade: 'B+'
    }
  ];

  get filteredCourses() {
    return this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}