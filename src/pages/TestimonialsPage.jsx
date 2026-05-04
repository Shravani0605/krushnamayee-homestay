import React from "react";
import { motion } from "framer-motion";
import homestay from "../images/garden_overview.jpg";

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
    name: "Prasad",
    text: "Our stay at the property in the 3rd week of December 25 was very comfortable.The host is responsive, helpful and has maintained the property in good condition.The location of the property is at the outskirts of Kolhapur and in a good locality.It was a great experience to stay at the property converse with the host.Thanks a lot to the host as well as the caretaker again.",
    rating: 5,
  },
  {
    name: "Abhjeet",
    text: "very well maintained, friendly care takers, clean and very good for family stay.",
    rating: 5,
  },
  {
    name: "Mangesh",
    text: "I stayed here with my family members. The stay was great...place is well maintained. The host is responsive. The place can be definitely recommended if you're visiting kolhapur",
    rating: 5,
  },
  {
    name: "Vikram",
    text: "It is a good place to stay for four people. Little bit on the outskirts. Peaceful.",
    rating: 4,
  },
  {
    name: "Suryakant",
    text: "Had a great time at Krushnamayee with family. Place was awesome with all amenities available as displayed. Quiet place, caretaker served food were delicious. No need of outside food ordering.  Worth visiting again with family and friends.",
    rating: 5,
  },

];

export default function TestimonialsPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero page-hero-short">
        <img src={homestay} alt="Testimonials" className="hero-bg" fetchPriority="high" decoding="async" />
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
