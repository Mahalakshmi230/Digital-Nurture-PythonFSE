import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        return response.json();
      })
      .then((data) => {
        const courseNames = [
          "React Fundamentals",
          "Java Programming",
          "Python Programming",
          "Database Management",
          "Web Development",
        ];

        const grades = ["A", "A+", "B+", "A", "A+"];

        const courseData = data.slice(0, 5).map((post, index) => ({
          id: post.id,
          name: courseNames[index],
          code: `CS30${index + 1}`,
          credits: index % 2 === 0 ? 4 : 3,
          grade: grades[index],
        }));

        setCourses(courseData);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load courses.");
        setLoading(false);
      });
  }, []);

  // Runs whenever the courses state changes.
  // The dependency array [courses] ensures this effect runs only when
  // the courses state is updated, avoiding unnecessary executions.
  useEffect(() => {
    console.log("Courses updated");
  }, [courses]);

  const handleEnroll = (id) => {
    if (!enrolledCourses.includes(id)) {
      setEnrolledCourses([...enrolledCourses, id]);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <input
        type="text"
        placeholder="Search Courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <div className="cards">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              code={course.code}
              credits={course.credits}
              grade={course.grade}
              onEnroll={handleEnroll}
            />
          ))}
        </div>
      )}

      <StudentProfile />

      <Footer />
    </div>
  );
}

export default App;