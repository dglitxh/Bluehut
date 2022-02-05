import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'



const Loader = (props) => {
  const {loc, text} = props

  const loaderVariants = {
    animationOne: {
      x: [90, 120],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.8,
        },
      }
    },
  }
  return (
    <div className="ml-2 mt-4">
    <Link to={loc} className=" py-5 my-5">
      {text}
      <motion.img className="loader"
        variants={loaderVariants}
        animate={'animationOne'}
        src="https://img.icons8.com/ios/36/000000/long-arrow-right.png"/>
    </Link>
    </div>
  )
}

export default Loader;
