import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData";

const CourseDetails = () => {
  const { id } = useParams();

  const course = coursesData.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <h2 style={{ padding: "80px", textAlign: "center" }}>Course not found</h2>
    );
  }

  return (
    <div style={{ padding: "60px 8%" }}>
      <h1>{course.title}</h1>
      <p>{course.subtitle}</p>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <img
          src={course.image}
          alt={course.title}
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "14px",
          }}
        />

        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: "16px", fontSize: "1rem" }}>
            ⭐ {course.rating} &nbsp; | &nbsp; ⏱ {course.duration} &nbsp; |
            &nbsp; 📘 {course.level}
          </p>

          <p style={{ color: "#64748b", lineHeight: "1.7" }}>
            {course.description}
          </p>

          <button
            style={{
              marginTop: "24px",
              padding: "14px 28px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        🔍 What This Course Covers
      </h1>
      <p style={{ color: "#64748b", lineHeight: "1.7" }}>
        {course.courseCovers}
      </p>

      
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        📊 Model Building & Evaluation
      </h1>
      <p style={{ color: "#64748b", lineHeight: "1.7" }}>
        {course.modelBuilding}
      </p>

      <h2 style={{ marginTop: "50px" }}>Why Learn </h2>
      <ul style={{ marginTop: "16px", lineHeight: "1.8" }}>
        {course.whyLearn?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: "50px" }}>Skills You Gain </h2>
      <ul style={{ marginTop: "16px", lineHeight: "1.8" }}>
        {course.skillsYouGain?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: "50px" }}>Technologies </h2>
      <ul style={{ marginTop: "16px", lineHeight: "1.8" }}>
        {course.technologies?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {(course.youtubePlaylist || course.youtube) && (
        <>
          <h2 style={{ marginTop: "50px" }}>Course Preview</h2>

          <iframe
            width="100%"
            height="420"
            src={course.youtubePlaylist || course.youtube}
            title="Course Preview"
            frameBorder="0"
            allowFullScreen
            style={{
              marginTop: "20px",
              borderRadius: "14px",
            }}
          ></iframe>
          <h2 style={{ marginTop: "50px" }}>✅ Learning Outcomes</h2>
          <ul style={{ marginTop: "16px", lineHeight: "1.8" }}>
            {course.LearningOutcomes?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      <ol style={{ marginTop: "16px", lineHeight: "1.8" }}>
        {course.curriculum?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h2 style={{ marginTop: "50px" }}>Projects </h2>
      <ul style={{ marginTop: "16px", lineHeight: "1.8" }}>
        {course.projects?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 style={{ marginTop: "50px" }}>Career Roles </h2>
      <ul style={{ marginTop: "16px", lineHeight: "1.8" }}>
        {course.careerRoles?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
