import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import courseData from "./data";

function App() {
  const [courses] = useState(courseData);
  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

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
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="cards">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onEnroll={handleEnroll}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;