import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AuthModal from "./AuthModal";

const Layout = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const { user } = useAuth();

  // 🔥 CLOSE MODAL AFTER LOGIN
  useEffect(() => {
    if (user) setShowLogin(false);
  }, [user]);

  return (
    <>
      <Navbar openLogin={() => setShowLogin(true)} />
      {children}
      <Footer />

      {showLogin && <AuthModal close={() => setShowLogin(false)} />}
    </>
  );
};

export default Layout;
