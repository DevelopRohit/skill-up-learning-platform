import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(list);
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: "60px 8%" }}>
      <h1 style={{ marginBottom: "30px" }}>Explore Courses</h1>

      {/* 🔥 NO TECH / NON-TECH SECTIONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            <div style={{ padding: "16px" }}>
              <h3>{course.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                {course.caption || course.description}
              </p>

              <p style={{ marginTop: "8px", fontSize: "0.85rem" }}>
                ⭐ {course.rating} | ⏱ {course.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
