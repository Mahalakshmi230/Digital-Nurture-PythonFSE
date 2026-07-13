function Header({ siteName, enrolledCount }) {
  return (
    <header
      style={{
        backgroundColor: "#0077cc",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>{siteName}</h1>

      <nav>
        <a href="#">Home</a> |{" "}
        <a href="#">Courses</a> |{" "}
        <a href="#">Profile</a>
      </nav>

      <h3>Enrolled Courses: {enrolledCount}</h3>
    </header>
  );
}

export default Header;