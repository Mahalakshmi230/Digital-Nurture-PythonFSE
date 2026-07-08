import { courses } from "./data.js";

// ---------------------------------------
// Task 45
// Promise with then()
// ---------------------------------------

function fetchUser(id){

    return fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
    )
    .then(response=>response.json())
    .then(user=>{

        console.log("User Name :",user.name);

    });

}

fetchUser(1);

// ---------------------------------------
// Task 46
// async await
// ---------------------------------------

async function fetchUserAsync(id){

    try{

        const response=await fetch(

        "https://jsonplaceholder.typicode.com/users/"+id

        );

        const user=await response.json();

        console.log("Async User :",user.name);

    }

    catch(error){

        console.log(error);

    }

}

fetchUserAsync(2);

// ---------------------------------------
// Task 47
// Simulate Network Delay
// ---------------------------------------

function fetchAllCourses(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve(courses);

        },1000);

    });

}

// ---------------------------------------
// Render Courses
// ---------------------------------------

const grid=document.querySelector(".course-grid");

function renderCourses(courseList){

    grid.innerHTML="";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.innerHTML=`

        <h3>${course.name}</h3>

        <p>Code : ${course.code}</p>

        <p>Credits : ${course.credits}</p>

        <p>Grade : ${course.grade}</p>

        `;

        grid.appendChild(article);

    });

}

// ---------------------------------------
// Task 48
// Loading State
// ---------------------------------------

const loading=document.querySelector("#loading");

fetchAllCourses()

.then(courseList=>{

    loading.style.display="none";

    renderCourses(courseList);

});

// ---------------------------------------
// Task 49
// Promise.all()
// ---------------------------------------

Promise.all([

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res=>res.json()),

fetch("https://jsonplaceholder.typicode.com/users/2")
.then(res=>res.json())

])

.then(users=>{

console.log(

"Promise.all Users :",

users[0].name,

users[1].name

);

});