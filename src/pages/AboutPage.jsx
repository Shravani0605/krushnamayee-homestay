import React from "react";
import { motion } from "framer-motion";
import garden from "../images/garden.jpg";
import outspace from "../images/outspace.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* Page Hero Banner */}
      <section className="page-hero">
        <img src={garden} alt="About Krushnamayee Homestay" className="hero-bg" />
        <div className="hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">About Us</div>
          <h1>Our Story</h1>
        </motion.div>
      </section>

      {/* About Content */}
      <motion.section
        className="section section-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="section-inner">
          <div className="about-grid">
            <motion.div
              className="about-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={outspace} alt="Outdoor space at Krushnamayee Homestay" />
            </motion.div>
            <div className="about-text">
              <div className="section-tag">Welcome</div>
              <h2>A Home Away from Home</h2>
              <p>
                Krushnamayee Homestay offers a peaceful and comfortable stay for
                tourists visiting Kolhapur. We provide clean rooms, a relaxing
                environment, and friendly service to make your stay memorable.
              </p>
              <p>
                Nestled in the heart of Kolhapur, our homestay combines traditional
                warmth with modern comforts. Relax, recharge, and rediscover the
                beauty of Maharashtra.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">🏡</div>
                  <span>Clean & Spacious Rooms</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🌿</div>
                  <span>Peaceful Garden</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🍽️</div>
                  <span>Home-cooked Meals</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📍</div>
                  <span>Prime Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Location & Services */}
      <motion.section
        className="section section-alt"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Location & Services</div>
            <h2>Conveniently Located</h2>
            <p>Close to Kolhapur's most popular landmarks with easy transport services.</p>
          </div>

          <div className="location-grid">
            <motion.div
              className="location-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="location-card-icon">🛕</div>
              <h3>3 km from Mahalaxmi Mandir</h3>
              <p>
                Visit the world-renowned Shri Mahalaxmi Temple, one of the six
                Shakti Peethas, just a short ride from our homestay. Experience
                the divine atmosphere and rich cultural heritage of Kolhapur.
              </p>
            </motion.div>

            <motion.div
              className="location-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="location-card-icon">🌊</div>
              <h3>1.5 km from Rankala Lake</h3>
              <p>
                Enjoy a peaceful evening stroll at the beautiful Rankala Lake.
                The lakeside promenade with its iconic Rankala Bhavani Mandap
                is a must-visit during your stay.
              </p>
            </motion.div>

            <motion.div
              className="location-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="location-card-icon">🚕</div>
              <h3>Cab Services in Kolhapur</h3>
              <p>
                We provide cab services for sightseeing and travel within
                Kolhapur as per your requirement. Explore Panhala Fort, Jyotiba
                Temple, and other attractions with our trusted drivers.
              </p>
            </motion.div>

            <motion.div
              className="location-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <div className="location-card-icon">🚉</div>
              <h3>Railway Station Pickup & Drop</h3>
              <p>
                Arrive stress-free! We offer pickup and drop service to and
                from Kolhapur Railway Station as per your requirement, so you
                can start your vacation the moment you arrive.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
