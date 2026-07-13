import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enroll } from "../redux/enrollmentSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import "../App.css";

function CoursesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    {
      id: 4,
      name: "Database Management",
      code: "CS304",
      credits: 3,
      grade: "A",
    },
    {
      id: 5,
      name: "Operating Systems",
      code: "CS305",
      credits: 4,
      grade: "A+",
    },
  ];

  const handleView = (id) => {
    navigate(`/courses/${id}`);
  };

  const handleEnroll = (course) => {
    dispatch(enroll(course));
    alert(`${course.name} enrolled successfully!`);
    navigate("/profile");
  };

  return (
    <>
      <Header />

      <div className="container">
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#0d6efd",
          }}
        >
          Available Courses
        </h2>

        <div className="cards">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              code={course.code}
              credits={course.credits}
              grade={course.grade}
              onView={handleView}
              onEnroll={() => handleEnroll(course)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CoursesPage;