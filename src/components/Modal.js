import React from "react"
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"


const backdropVariants = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1
    }
}

const modalVariants = {
    start: {
        y: "-100vh",
        opacity: 0
    },
    end: {
        y: 200,
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

const Modal = ({ showModal }) => {

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className="backdrop"
                    variants={backdropVariants}
                    initial="start"
                    animate="end"
                    exit="start"
                >
                    <motion.div className="modal"
                        variants={modalVariants}
                    >
                        <p>Want to make another pizza</p>
                        <Link to="/" >
                            <button>Start again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
