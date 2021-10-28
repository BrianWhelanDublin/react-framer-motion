import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: 10,
      duration: 0.3
    }
  }
}

const containerVariants = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="start"
      animate="end"
      exit="exit"
    >
      <h2 >
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"

        >
          Create Your Pizza
        </motion.button>
      </Link>
      {/* <Loader /> */}
    </motion.div>
  )
}

export default Home;