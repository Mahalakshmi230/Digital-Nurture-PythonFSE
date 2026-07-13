import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div className="container">
      <Header siteName="Student Portal" />

      <div className="cards">
        <CourseCard
          name="React Fundamentals"
          code="CS301"
          credits={4}
          grade="A"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;