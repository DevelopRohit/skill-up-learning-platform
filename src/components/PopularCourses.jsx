import { useNavigate } from "react-router-dom";
import styles from "./PopularCourses.module.css";

const PopularCourses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: "fullstack",
      title: "Full Stack Web Development",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      level: "Beginner to Advanced",
      duration: "6 Months",
      tag: "🔥 Trending",
    },
    {
      id: "datascience",
      title: "Data Science & Machine Learning",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      level: "Intermediate",
      duration: "5 Months",
      tag: "⭐ Popular",
    },
    {
      id: "uiux",
      title: "UI / UX Design",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      level: "Beginner",
      duration: "3 Months",
      tag: "🎨 Design",
    },
    {
      id: "cyber",
      title: "Cyber Security Essentials",
      img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
      level: "Intermediate",
      duration: "4 Months",
      tag: "🔐 High Demand",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Popular Courses</h2>
        <p>Most in-demand skills chosen by learners</p>
      </div>

      <div className={styles.grid}>
        {courses.map((course) => (
          <div className={styles.card} key={course.id}>
            {/* Image */}
            <div className={styles.imageBox}>
              <img src={course.img} alt={course.title} />
              <span className={styles.tag}>{course.tag}</span>
            </div>

            {/* Content */}
            <div className={styles.content}>
              <h3>{course.title}</h3>

              <div className={styles.meta}>
                <span>📘 {course.level}</span>
                <span>⏱ {course.duration}</span>
              </div>

              <button
                className={styles.btn}
                onClick={() => navigate(`/course/${course.id}`)}
              >
                View Course →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
