import "./hero.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-scroll"; // Import the Link component from react-scroll
import "react-toastify/dist/ReactToastify.css";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    toast.info("CV is downloading...");

    const link = document.createElement("a");
    link.href = "/krishnaresume final.pdf"; // Ensure the correct path to your PDF file
    link.download = "krishnaresume final.pdf"; // Desired file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      toast.success("Your CV has been downloaded!");
    }, 5000); // Adjust the timeout duration to match the expected download time
  };

  return (
    <div className="hero">
      <ToastContainer />
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Hi,
            <br />
            I'm Krishna,
          </motion.h2>
          <motion.h1 variants={textVariants} className="main-heading">
            Web Developer
          </motion.h1>
          <motion.h3 variants={textVariants} className="tagline">
            ~ Code with Passion, Develop with Precision
          </motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <Link to="portfolio" smooth={true} duration={1000}>
              <motion.button type="button" variants={textVariants}>
                See the latest Works
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={1000}>
              {" "}
              {/* Use Link to scroll to the contact section */}
              <motion.button type="button" variants={textVariants}>
                Contact Me
              </motion.button>
            </Link>
            <motion.button
              onClick={handleDownload}
              type="button"
              variants={textVariants}
            >
              Download CV
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll Down"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        WEB DEVELOPER
      </motion.div>
      <div className="imageContainer">
        <img src="download (1) (1).png" alt="Krishna" />
      </div>
    </div>
  );
};

export default Hero;
