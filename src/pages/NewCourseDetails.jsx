import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const NewCourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, "courses", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          setCourse(null);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <h2 style={{ padding: "80px" }}>Loading...</h2>;
  }

  if (!course) {
    return (
      <h2 style={{ padding: "80px", textAlign: "center" }}>
        Course not found
      </h2>
    );
  }

  /* 🔥 VIDEO / PLAYLIST LOGIC */
  const videoSrc =
    course.youtubePlaylist ||
    (course.youtubeLink
      ? course.youtubeLink.replace("watch?v=", "embed/")
      : null);

  return (
    <div style={{ padding: "60px 8%", maxWidth: "1200px", margin: "auto" }}>
      {/* ================= TOP SECTION ================= */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "60px",
        }}
      >
        <img
          src={course.image}
          alt={course.title}
          style={{
            width: "420px",
            height: "260px",
            objectFit: "cover",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          }}
        />

        <div style={{ flex: 1 }}>
          <h1>{course.title}</h1>

          <p
            style={{
              marginTop: "12px",
              color: "#334155",
              fontWeight: 500,
            }}
          >
            ⭐ {course.rating} &nbsp; | &nbsp;
            ⏱ {course.duration} &nbsp; | &nbsp;
            📘 {course.level}
          </p>

          <p style={{ lineHeight: "1.7", marginTop: "14px" }}>
            {course.description}
          </p>

          <button
            style={{
              marginTop: "24px",
              padding: "14px 32px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontWeight: 600,
              cursor: "pointer",
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




      {/* ================= VIDEO / PLAYLIST ================= */}
      {videoSrc && (
        <>
          <h2>Course Preview</h2>
          <iframe
            src={videoSrc}
            width="100%"
            height="420"
            style={{
              borderRadius: "18px",
              marginTop: "20px",
            }}
            allowFullScreen
            title="Course Preview"
          />
        </>
      )}

      {/* ================= LEARNINGS ================= */}
      {course.learnings?.length > 0 && (
        <>
          <h2 style={{ marginTop: "40px" }}>What you’ll learn</h2>
          <ul style={{ lineHeight: "1.8" }}>
            {course.learnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* ================= CURRICULUM ================= */}
      {course.curriculum?.length > 0 && (
        <>
          <h2 style={{ marginTop: "40px" }}>Course Curriculum</h2>
          <ol style={{ lineHeight: "1.8" }}>
            {course.curriculum.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </>
      )}
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

export default NewCourseDetails;
