import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses = [
    {
      title: "Angular Fundamentals",
      code: "CS401",
      credits: 4,
      grade: "A"
    },

    {
      title: "TypeScript Essentials",
      code: "CS402",
      credits: 3,
      grade: "A"
    },

    {
      title: "HTML & CSS",
      code: "CS403",
      credits: 3,
      grade: "A"
    },

    {
      title: "JavaScript ES6",
      code: "CS404",
      credits: 4,
      grade: "A"
    },

    {
      title: "Database Systems",
      code: "CS405",
      credits: 3,
      grade: "A"
    }
  ];


  ngOnInit(): void {

    console.log("Course List Loaded");

  }

}