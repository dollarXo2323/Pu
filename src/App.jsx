import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import SubmitIdea from "./pages/SubmitIdea";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  const [locale, setLocale] = useState("uk");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved) setLocale(saved);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "uk" ? "es" : "uk";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <Router>
      <Navbar locale={locale} toggleLocale={toggleLocale} />
      <Routes>
        <Route path="/" element={<Home locale={locale} />} />
        <Route path="/blog" element={<Blog locale={locale} />} />
        <Route path="/admin" element={<Admin locale={locale} />} />
        <Route path="/submit" element={<SubmitIdea locale={locale} />} />
        <Route path="/team" element={<Team locale={locale} />} />
        <Route path="/contact" element={<Contact locale={locale} />} />
        <Route path="*" element={<NotFound locale={locale} />} />
      </Routes>
    </Router>
  );
    }
    
