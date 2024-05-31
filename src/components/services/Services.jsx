import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p whileHover={{ color: "#F4CE14" }}>
          I focus on delivering high-quality web solutions
          <br /> to enhance your digital presence
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#F4CE14" }}>Innovative</motion.b>{" "}
            Web Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#F4CE14" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>EXPLORE SERVICES</button>
        </div>
      </motion.div>
      <motion.div className="sliderContainer" variants={variants}>
        <motion.div
          className="box stylishBox"
          whileHover={{ backgroundColor: "#caf0f8", color: "black", fontWeight: "bold" }}
        >
          <h2>Front-End Development</h2>
          <p>
            Crafting visually stunning and responsive websites using the latest front-end technologies.
          </p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Tailwind CSS, SCSS</li>
            <li>Bootstrap, Material UI</li>
          </ul>
        </motion.div>
        <motion.div
          className="box stylishBox"
          whileHover={{ backgroundColor: "#caf0f8", color: "black", fontWeight: "bold" }}
        >
          <h2>Back-End Development</h2>
          <p>
            Building robust and scalable server-side applications to power your website.
          </p>
          <ul>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>API Development</li>
          </ul>
        </motion.div>
        <motion.div
          className="box stylishBox"
          whileHover={{ backgroundColor: "#caf0f8", color: "black", fontWeight: "bold" }}
        >
          <h2>UI/UX Design</h2>
          <p>
            Designing intuitive and engaging user interfaces to enhance user experience.
          </p>
          <ul>
            <li>Wireframing and Prototyping</li>
            <li>Interactive Design</li>
            <li>Framer Motion Animations</li>
          </ul>
        </motion.div>
        <motion.div
          className="box stylishBox"
          whileHover={{ backgroundColor: "#caf0f8", color: "black", fontWeight: "bold" }}
        >
          <h2>Full-Stack Development</h2>
          <p>
            Providing end-to-end development solutions, from front-end to back-end.
          </p>
          <ul>
            <li>React & Node.js</li>
            <li>Database Integration</li>
            <li>RESTful APIs</li>
          </ul>
        </motion.div>
        <motion.div
          className="box stylishBox"
          whileHover={{ backgroundColor: "#caf0f8", color: "black", fontWeight: "bold" }}
        >
          <h2>Performance Optimization</h2>
          <p>
            Enhancing your website's speed and performance for a better user experience.
          </p>
          <ul>
            <li>Code Optimization</li>
            <li>SEO Best Practices</li>
            <li>Responsive Design</li>
          </ul>
        </motion.div>
        <motion.div
          className="box stylishBox"
          whileHover={{ backgroundColor: "#caf0f8", color: "black", fontWeight: "bold" }}
        >
          <h2>Technical Support & Maintenance</h2>
          <p>
            Providing ongoing support and maintenance to keep your website up-to-date and secure.
          </p>
          <ul>
            <li>Regular Updates</li>
            <li>Bug Fixes</li>
            <li>24/7 Support</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
