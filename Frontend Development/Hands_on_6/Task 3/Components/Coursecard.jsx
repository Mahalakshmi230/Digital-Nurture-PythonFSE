function CourseCard({
  id,
  name,
  code,
  credits,
  grade,
  onView,
  onEnroll,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>
        <strong>Code:</strong> {code}
      </p>

      <p>
        <strong>Credits:</strong> {credits}
      </p>

      <p>
        <strong>Grade:</strong> {grade}
      </p>

      <button onClick={() => onView(id)}>
        View Details
      </button>

      <br />
      <br />

      <button onClick={() => onEnroll()}>
        Enroll
      </button>
    </div>
  );
}

export default CourseCard;