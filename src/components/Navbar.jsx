import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ openLogin }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearch = () => {
    if (!search.trim()) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className={styles.navbar}>
      {/* LEFT */}
      <div className={styles.left}>
        <div
          className={styles.logo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          📘 <span>SKILL-UP</span>
        </div>

        <ul className={styles.links}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>

      {/* SEARCH */}
      <div className={styles.searchBox}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search skills..."
        />
        <button onClick={handleSearch} className={styles.searchBtn}>
          <FaSearch />
        </button>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        {!user ? (
          <>
            <button className={styles.signin} onClick={openLogin}>
              Sign in
            </button>
            <button className={styles.signup} onClick={openLogin}>
              Sign up
            </button>
          </>
        ) : (
          <div className={styles.userBox}>
            <img
              src={
                user.photoURL ||
                "https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
              }
              alt={user.displayName}
              className={styles.avatar}
              onClick={() => navigate("/profile")}
              style={{ cursor: "pointer" }}
            />

            {/* ❌ NEVER render {user} */}
            <span
              className={styles.userName}
              onClick={() => navigate("/profile")}
              style={{ cursor: "pointer" }}
            >
              {user.displayName}
            </span>

            <button onClick={logout} className={styles.logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
