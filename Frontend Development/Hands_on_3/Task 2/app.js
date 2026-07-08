import { courses } from "./data.js";

const grid = document.querySelector(".course-grid");

const fragment = document.createDocumentFragment();

courses.forEach(course=>{

    const article=document.createElement("article");

    article.className="course-card";

    article.innerHTML=`

    <h3>${course.name}</h3>

    <p>Code : ${course.code}</p>

    <p>Credits : ${course.credits}</p>

    `;

    fragment.appendChild(article);

});

grid.appendChild(fragment);

const total = courses.reduce(
(sum,course)=>sum+course.credits,
0
);

document.querySelector("#total-credits").textContent=
`Total Credits : ${total}`;