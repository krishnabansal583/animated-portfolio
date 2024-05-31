import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.img
          src="/output-onlinepngtools (1).png"
          alt="Krishna Bansal"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="profile-photo"
        />
        <div className="social">
          <a href="https://github.com/krishnabansal583" target="_blank" rel="noopener noreferrer">
            <img src="/Github-Logo-PNG.png" alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/krishnab583/" target="_blank" rel="noopener noreferrer">
            <img src="/Linkedin-logo.png" alt="LinkedIn Logo" />
          </a>
          <a href="https://leetcode.com/u/krishn2345/" target="_blank" rel="noopener noreferrer">
            <img src="/leetcode image.png" alt="LeetCode Logo" />
          </a>
          <a href="https://www.hackerrank.com/profile/krishnabansal583" target="_blank" rel="noopener noreferrer">
            <img src="/HackerRank_logo (1).png" alt="HackerRank Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
