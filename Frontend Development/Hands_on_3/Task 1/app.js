import { courses } from "./data.js";

// Destructuring

courses.forEach(course => {
    const { name, credits } = course;
    console.log(name, credits);
});

// map()

const formatted = courses.map(course =>
`${course.code} — ${course.name} (${course.credits} credits)`
);

console.log(formatted);

// filter()

const filtered = courses.filter(course => course.credits >= 4);

console.log("Courses with credits >=4 :", filtered.length);

// reduce()

const totalCredits = courses.reduce(
(total, course) => total + course.credits,0);

console.log("Total Credits :", totalCredits);

formatted.forEach(item => console.log(`${item}`));