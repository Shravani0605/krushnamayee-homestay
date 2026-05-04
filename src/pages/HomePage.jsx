import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeview from "../images/homeview.jpg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img src={homeview} alt="Krushnamayee Homestay" className="hero-bg" fetchPriority="high" decoding="async" />
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-tag">Welcome to Kolhapur</div>
          <h1>Krushnamayee Homestay</h1>
          <p>
            Tradition in every corner, home in every stay. Experience authentic
            Kolhapur hospitality in a peaceful and comfortable setting.
          </p>
          <motion.button
            className="hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open("https://wa.me/919422605509", "_blank")}
          >
            Book Your Stay
          </motion.button>
        </motion.div>
      </section>

      {/* Quick highlights */}
      <section className="section section-white">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Why Choose Us</div>
            <h2>Your Perfect Kolhapur Experience</h2>
            <p>Comfort, convenience, and authentic hospitality — all in one place.</p>
          </div>
          <div className="highlights-grid">
            <motion.div
              className="highlight-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="highlight-icon">🛕</div>
              <h3>Near Mahalaxmi Mandir</h3>
              <p>Just 3 km from the iconic Mahalaxmi Temple — one of the Shakti Peethas.</p>
            </motion.div>
            <motion.div
              className="highlight-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="highlight-icon">🌊</div>
              <h3>Close to Rankala Lake</h3>
              <p>Only 1.5 km from the scenic Rankala Lake, perfect for evening walks.</p>
            </motion.div>
            <motion.div
              className="highlight-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="highlight-icon">🚕</div>
              <h3>Cab & Pickup Service*</h3>
              <p>Cab services in Kolhapur and railway station pickup/drop available as per requirement.</p>
            </motion.div>
            <motion.div
              className="highlight-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="highlight-icon">🏡</div>
              <h3>Homely Comfort*</h3>
              <p>Clean rooms, peaceful garden, and home-cooked meals for a cozy stay. As per requirement or order.</p>
            </motion.div>
          </div>
          <div className="home-cta-row">
            <Link to="/about" className="btn-outline">Learn More About Us</Link>
            <Link to="/gallery" className="btn-primary">View Gallery</Link>
          </div>
        </div>
      </section>
    </>
  );
}
