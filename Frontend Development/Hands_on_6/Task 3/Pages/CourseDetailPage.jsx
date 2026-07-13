import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

function CourseDetailPage() {
  const { courseId } = useParams();

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      code: "CS301",
      credits: 4,
      grade: "A",
      description:
        "Learn React basics including JSX, Components, Props, State and Hooks."
    },
    {
      id: 2,
      name: "Java Programming",
      code: "CS302",
      credits: 3,
      grade: "A+",
      description:
        "Understand Java fundamentals, OOP concepts and collections."
    },
    {
      id: 3,
      name: "Python Programming",
      code: "CS303",
      credits: 4,
      grade: "A",
      description:
        "Master Python programming with functions, files and modules."
    }
  ];

  const course = courses.find(
    (c) => c.id === Number(courseId)
  );

  return (
    <>
      <Header />

      <div className="detail">
        {course ? (
          <>
            <h2>{course.name}</h2>

            <br />

            <p><strong>Course Code:</strong> {course.code}</p>

            <p><strong>Credits:</strong> {course.credits}</p>

            <p><strong>Grade:</strong> {course.grade}</p>

            <br />

            <p>{course.description}</p>
          </>
        ) : (
          <h2>Course Not Found</h2>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CourseDetailPage;