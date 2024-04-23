import { useRef } from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";
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

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
    //   animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p whileHover={{color:"#F4CE14"}}>
          I focus on helping your brand grow
          <br /> and move forward
        </motion.p >
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"#F4CE14"}}>Unique</motion.b> Websites
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#F4CE14"}}>For Your</motion.b> Company.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            molestiae vitae obcaecati dolore laudantium error qui deleniti animi
            cumque praesentium id ea iusto aperiam repellat cum nemo rem itaque
            distinctio harum sed, voluptatibus iure!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            molestiae vitae obcaecati dolore laudantium error qui deleniti animi
            cumque praesentium id ea iusto aperiam repellat cum nemo rem itaque
            distinctio harum sed, voluptatibus iure!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            molestiae vitae obcaecati dolore laudantium error qui deleniti animi
            cumque praesentium id ea iusto aperiam repellat cum nemo rem itaque
            distinctio harum sed, voluptatibus iure!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
