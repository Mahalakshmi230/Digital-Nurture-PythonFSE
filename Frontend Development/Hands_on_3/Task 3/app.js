import { courses } from "./data.js";

const grid = document.querySelector(".course-grid");

const totalCredits = document.querySelector("#total-credits");

const selectedCourse = document.querySelector("#selected-course");

function renderCourses(courseList){

    grid.innerHTML="";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.dataset.id=course.id;

        article.innerHTML=`

        <h3>${course.name}</h3>

        <p>Course Code : ${course.code}</p>

        <p>Credits : ${course.credits}</p>

        `;

        grid.appendChild(article);

    });

    const total=courseList.reduce(

        (sum,course)=>sum+course.credits,

        0

    );

    totalCredits.textContent=
    `Total Credits : ${total}`;

}

renderCourses(courses);

// Search

document.querySelector("#search-courses")

.addEventListener("input",function(){

    const text=this.value.toLowerCase();

    const filtered=courses.filter(course=>

    course.name.toLowerCase().includes(text)

    );

    renderCourses(filtered);

});

// Sort

document.querySelector("#sort-btn")

.addEventListener("click",()=>{

    const sorted=[...courses];

    sorted.sort((a,b)=>b.credits-a.credits);

    renderCourses(sorted);

});

// Event Delegation

grid.addEventListener("click",(event)=>{

    const card=event.target.closest(".course-card");

    if(!card) return;

    const id=Number(card.dataset.id);

    const course=courses.find(c=>c.id===id);

    selectedCourse.textContent=

    `Selected Course : ${course.name} | Grade : ${course.grade}`;

});