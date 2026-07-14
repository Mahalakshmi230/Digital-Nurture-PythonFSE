import { Component } from '@angular/core';
import { CourseListComponent } from './course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [CourseListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}