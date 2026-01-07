// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";

/* Pages */
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import NewCourseDetails from "./pages/NewCourseDetails";
import SearchResults from "./pages/SearchResults";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  openLogin={() =>
                    document.dispatchEvent(new Event("open-login"))
                  }
                />
              }
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/courses/:id" element={<NewCourseDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/profile"
              element={
                  <Profile />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
