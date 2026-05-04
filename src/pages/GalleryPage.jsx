import React from "react";
import { motion } from "framer-motion";

import bedroom1 from "../images/bedroom1.jpg";
import bedroom2 from "../images/bedroom2.jpg";
import garden from "../images/garden.jpg";
import homeview from "../images/homeview.jpg";
import kitchen from "../images/kitchen.jpg";
import homestay from "../images/homestay.jpg";
import krushna from "../images/krushna.jpg";
import outspace from "../images/outspace.jpg";
import room1 from "../images/room1.jpg";
import bedroom1_view2 from "../images/bedroom1_view2.jpg";
import bedroom2_view2 from "../images/bedroom2_view2.jpg";
import garden_overview from "../images/garden_overview.jpg";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

const galleryImages = [
  { src: bedroom1, label: "Bedroom Suite" },
  { src: bedroom1_view2, label: "Bedroom View" },
  { src: bedroom2, label: "Deluxe Room" },
  { src: bedroom2_view2, label: "Deluxe Room View" },
  { src: garden, label: "Garden" },
  { src: garden_overview, label: "Garden Overview" },
  { src: homeview, label: "Homestay Exterior" },
  { src: kitchen, label: "Kitchen" },
  { src: outspace, label: "Outdoor Space" },
  { src: room1, label: "Living Area" },
  { src: homestay, label: "Welcome" },
  { src: krushna, label: "Property View" },
];

export default function GalleryPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero page-hero-short">
        <img src={garden_overview} alt="Gallery" className="hero-bg" fetchPriority="high" decoding="async" />
        <div className="hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">Gallery</div>
          <h1>Explore Our Spaces</h1>
        </motion.div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <motion.div
            className="gallery-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryImages.map((img, i) => (
              <motion.div key={i} className="gallery-item" variants={fadeInUp}>
                <img src={img.src} alt={img.label} loading="lazy" decoding="async" />
                <div className="gallery-overlay">
                  <span className="gallery-label">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
