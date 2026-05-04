import React from "react";
import { motion } from "framer-motion";
import krushna from "../images/krushna.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero page-hero-short">
        <img src={krushna} alt="Contact" className="hero-bg" fetchPriority="high" decoding="async" />
        <div className="hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">Get in Touch</div>
          <h1>Contact Us</h1>
        </motion.div>
      </section>

      <motion.section
        className="section section-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="section-inner">
          <div className="contact-grid">

            <div className="contact-info">
              <div className="section-tag">Reach Out</div>
              <h2>We'd Love to Hear from You</h2>
              <p>
                Ready to book your stay or have questions? Reach out to us
                directly — we're here to help make your Kolhapur trip perfect!
              </p>

              <div className="contact-detail">
                <div className="contact-icon">📞</div>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">
                    +91 9881156620 / +91 9422605509
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">
                    Kolhapur, Maharashtra
                  </div>
                </div>
              </div>

              {/* OPTIONAL SECTION (clean comment)
              <div className="contact-detail">
                <div className="contact-icon">🛕</div>
                <div>
                  <div className="contact-label">Nearby</div>
                  <div className="contact-value">
                    3 km from Mahalaxmi Mandir • 1.5 km from Rankala Lake
                  </div>
                </div>
              </div>
              */}

              <div className="contact-btns-row">
                <motion.button
                  className="whatsapp-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    window.open("https://wa.me/919881156620", "_blank")
                  }
                >
                  💬 Chat on WhatsApp
                </motion.button>

                <motion.button
                  className="instagram-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/krushnamayee.homestaykolhapur",
                      "_blank"
                    )
                  }
                >
                  📸 Follow on Instagram
                </motion.button>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Krushnamayee Homestay Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122247.35055254888!2d74.12399!3d16.70529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </motion.section>
    </div>
  );
}