## index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Portal</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <h2 class="logo">Student Portal</h2>

    <nav>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Grades</a></li>
        </ul>
    </nav>
</header>

<main>

<section id="hero">
    <h1>Welcome to the Student Portal</h1>

    <p>
        Learn new technologies and improve your skills through interactive courses.
    </p>

    <button>Explore Courses</button>
</section>

<section class="stats-bar">

    <div class="stat-item">
        <h3>3</h3>
        <p>Courses Enrolled</p>
    </div>

    <div class="stat-item">
        <h3>3.8</h3>
        <p>GPA</p>
    </div>

    <div class="stat-item">
        <h3>6</h3>
        <p>Semester</p>
    </div>

</section>

<section id="courses">

    <h2>Available Courses</h2>

    <article class="course-card">
        <h3>HTML & CSS</h3>
        <p>Learn HTML5 and CSS3 fundamentals.</p>
        <span>Credits: 3</span>
    </article>

    <article class="course-card">
        <h3>Java Programming</h3>
        <p>Learn Object-Oriented Programming using Java.</p>
        <span>Credits: 4</span>
    </article>

    <article class="course-card">
        <h3>Database Management</h3>
        <p>Understand SQL and relational databases.</p>
        <span>Credits: 3</span>
    </article>

</section>

</main>

<footer>
    <p>&copy; 2026 Student Portal</p>
</footer>

</body>
</html>

## styles.css

/* CSS Reset */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

/* Body */
body{
    font-family:Arial,sans-serif;
    background:#f4f4f4;
    color:#333;
}

/* Header */

header{
    background:#2c3e50;
    color:white;
    padding:20px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:30px;
}

/* Navigation */

nav{
    display:flex;
    align-items:center;
}

.nav-links{
    display:flex;
    list-style:none;
    gap:25px;
}

.nav-links a{
    text-decoration:none;
    color:white;
    font-weight:bold;
}

.nav-links a:hover{
    color:#f1c40f;
}

/* Hero */

#hero{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:60px;
}

#hero p{
    margin:20px 0;
}

button{
    padding:12px 24px;
    background:#3498db;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
}

button:hover{
    background:#2980b9;
}

/* Stats Bar */

.stats-bar{
    display:flex;
    justify-content:space-evenly;
    background:white;
    padding:20px;
    margin:20px;
}

.stat-item{
    flex:1;
    text-align:center;
}

/* Courses */

#courses{
    padding:30px;
}

.course-card{
    background:white;
    border:1px solid #ddd;
    border-radius:8px;
    padding:20px;
    margin-bottom:20px;
    box-shadow:0 2px 6px rgba(0,0,0,0.2);
}

/* Footer */

footer{
    background:#2c3e50;
    color:white;
    text-align:center;
    padding:15px;
    margin-top:20px;
}

## output

<img width="1918" height="754" alt="Screenshot 2026-07-07 133224" src="https://github.com/user-attachments/assets/df956995-66c1-491e-b876-7dcf20e63d9c" />
