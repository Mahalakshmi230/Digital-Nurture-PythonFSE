import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

function CoursesPage() {
  const navigate = useNavigate();

  const { enrollCourse } = useContext(EnrollmentContext);

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      code: "CS301",
      credits: 4,
      grade: "A",
    },
    {
      id: 2,
      name: "Java Programming",
      code: "CS302",
      credits: 3,
      grade: "A+",
    },
    {
      id: 3,
      name: "Python Programming",
      code: "CS303",
      credits: 4,
      grade: "A",
    },
  ];

  const handleEnroll = (course) => {
    enrollCourse(course);
    navigate("/profile");
  };

  return (
    <>
      <Header />

      <div className="cards">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onView={() => navigate(`/courses/${course.id}`)}
            onEnroll={() => handleEnroll(course)}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default CoursesPage;