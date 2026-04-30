import React from "react";
import { motion } from "framer-motion";
import homestay from "../images/homestay.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const testimonials = [
  {
    name: "Rahul Patil",
    text: "Very clean rooms and peaceful environment. Perfect for a family stay. The hosts were incredibly warm and welcoming.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    text: "Excellent hospitality and comfortable stay. The homemade food was delicious. Highly recommended for anyone visiting Kolhapur!",
    rating: 5,
  },
  {
    name: "Amit Desai",
    text: "Nice location and outstanding service. The garden is beautiful and rooms are spotless. Will definitely visit again.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero page-hero-short">
        <img src={homestay} alt="Testimonials" className="hero-bg" />
        <div className="hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">Testimonials</div>
          <h1>What Our Guests Say</h1>
        </motion.div>
      </section>

      <section className="section section-white">
        <div className="section-inner">
          <motion.div
            className="testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial-card" variants={fadeInUp}>
                <div className="testimonial-stars">
                  {"★".repeat(t.rating)}
                </div>
                <blockquote>"{t.text}"</blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">Guest</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
