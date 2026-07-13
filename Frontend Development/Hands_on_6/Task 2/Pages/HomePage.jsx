import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

function HomePage() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="hero">
          <h2>Welcome to Student Portal</h2>

          <p>
            Manage your courses, view your profile, and explore course details
            using React Router.
          </p>

          <br />

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student"
            width="220"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;