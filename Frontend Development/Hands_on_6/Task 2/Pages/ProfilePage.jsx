import { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EnrollmentContext } from "../context/EnrollmentContext";

function ProfilePage() {
  const { enrolledCourses, removeCourse } =
    useContext(EnrollmentContext);

  return (
    <>
      <Header />

      <div className="profile">
        <h2>Enrolled Courses</h2>

        {enrolledCourses.length === 0 ? (
          <p>No Courses Enrolled</p>
        ) : (
          enrolledCourses.map((course) => (
            <div key={course.id}>
              <h3>{course.name}</h3>

              <button
                onClick={() => removeCourse(course.id)}
              >
                Remove
              </button>

              <hr />
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}

export default ProfilePage;