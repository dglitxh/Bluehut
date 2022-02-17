import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'



const Loader = (props) => {
  const { loc } = props

  const loaderVariants = {
    animationOne: {
      x: [10, 70],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 1,
        },
      }
    },
  }
  return(
<div>
    <Link to={loc} className='ml-5'>
      <motion.img className="ml-3 mb-3"
        variants={loaderVariants}
        animate={'animationOne'}
        src="https://img.icons8.com/nolan/34/long-arrow-right--v1.png"/>

    </Link>
    </div>
  )
}

export default Loader;
