import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FIREBASE DATA FETCH
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await getDocs(collection(db, "courses"));
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(list);
      } catch (error) {
        console.error("Firebase fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // 🔍 SEARCH FILTER
  const filteredCourses = courses.filter((course) =>
    course.title?.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return <p style={{ padding: "80px", textAlign: "center" }}>Loading...</p>;
  }

  if (filteredCourses.length === 0) {
    return <p style={{ padding: "80px", textAlign: "center" }}>No courses found</p>;
  }

  return (
    <div style={{ padding: "60px 8%" }}>
      <h2>Search results for "{query}"</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "24px", marginTop: "30px" }}>
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "10px" }}
            />

            <h3 style={{ margin: "12px 0 6px" }}>{course.title}</h3>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              {course.caption}
            </p>

            <Link to={`/courses/${course.id}`}>
              <button
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "10px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                View Course
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
