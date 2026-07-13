function Header(props) {
  return (
    <header
      style={{
        backgroundColor: "#0077cc",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>{props.siteName}</h1>

      <nav>
        <a href="#">Home</a> |{" "}
        <a href="#">Courses</a> |{" "}
        <a href="#">Profile</a>
      </nav>
    </header>
  );
}

export default Header;