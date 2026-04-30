import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <Link to="/" className="logo">
            Krushnamayee <span>Homestay</span>
          </Link>
          <nav className="nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-btn${location.pathname === item.path ? " active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`mobile-nav-overlay${mobileNavOpen ? " open" : ""}`}
        onClick={() => setMobileNavOpen(false)}
      />
      <div className={`mobile-nav${mobileNavOpen ? " open" : ""}`}>
        <div className="mobile-nav-close">
          <button onClick={() => setMobileNavOpen(false)} aria-label="Close menu">
            <X />
          </button>
        </div>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link${location.pathname === item.path ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
