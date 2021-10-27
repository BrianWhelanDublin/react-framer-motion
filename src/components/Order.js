import React, { useEffect } from 'react';
import { motion } from "framer-motion";



const containerVariants = {
  start: {
    x: "100vw",
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
    }
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
      mass: 0.4,
      damping: 8,

      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
}

const childVarients = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1

  }
}

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="start"
      animate="end"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childVarients}
      >You ordered a {pizza.base} pizza with:</motion.p>

      <motion.div
        variants={childVarients}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;