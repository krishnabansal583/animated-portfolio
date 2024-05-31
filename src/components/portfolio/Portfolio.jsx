import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real Estate",
    img: "modern aprtment building on a mountain with many p.jpg",
    desc: " Developed a cutting-edge Real Estate platform using React, NodeJS, MongoDB, and APIs, featuring robust property listings, search functionality, and interactive maps. Architected and developed an intuitive property management interface, seamlessly integrating Auth0 for secure  login/signup workflows.",
    repoLink: "https://github.com/krishnabansal583/Final-Project-BDCOE",
  },
  {
    id: 2,
    title: "Expense Tracker",
    img: "expense tracker.jpg",
    desc: "Conceptualized and constructed an intuitive Expense Tracker web application using React, HTML/CSS, and JavaScript, providing users with a seamless financial management experience. Utilized the Material UI library to design sleek and visually appealing user interfaces, ensuring an exceptional user experience across various devices. ", 
    repoLink: "https://github.com/krishnabansal583/Expense-handler",
  },
  {
    id: 3,
    title: "Duck Hunt Game",
    img: "the wolf hunter in black t-shirt is holding the du.jpg",
    desc: "Duck Hunt Game is a classic arcade shooter recreated by our frontend team at Big Data Technical Society. Using React, JavaScript, HTML, and CSS, we've brought this nostalgic game to the web. Test your reflexes and aiming skills in this modern twist on a beloved classic.",
    repoLink: "https://github.com/Kritika745/Duck-Hunt-Game",
  },
  {
    id: 4,
    title: "Music Website",
    img: "epic EDM DJ album cover.jpg",
    desc: "Introducing my personal project: a captivating Music Website, exclusively designed and developed by yours truly using HTML, CSS, and JavaScript. Immerse yourself in a world of melodies and rhythms, where you can explore playlists, discover new artists, and indulge in the joy of music—all powered by the magic of frontend development",
    repoLink: "https://github.com/krishnabansal583/music",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.repoLink} target="_blank" rel="noopener noreferrer">
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
