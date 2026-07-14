import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { CourseListComponent } from './course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    CourseListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}