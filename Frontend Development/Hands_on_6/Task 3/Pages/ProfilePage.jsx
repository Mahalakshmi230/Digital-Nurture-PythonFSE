import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { unenroll } from "../redux/enrollmentSlice";

function ProfilePage() {
  const dispatch = useDispatch();

  const enrolledCourses = useSelector(
    (state) => state.enrollment.enrolledCourses
  );

  return (
    <>
      <Header />

      <div className="profile">
        <h2>Enrolled Courses</h2>

        {enrolledCourses.length === 0 ? (
          <p>No courses enrolled.</p>
        ) : (
          enrolledCourses.map((course) => (
            <div key={course.id}>
              <h3>{course.name}</h3>

              <button
                onClick={() =>
                  dispatch(unenroll(course.id))
                }
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