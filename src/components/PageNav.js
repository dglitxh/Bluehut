import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'



const Loader = (props) => {
  const { loc } = props

  const loaderVariants = {
    animationOne: {
      x: [30, 70],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.8,
        },
      }
    },
  }
  return(
<div>
    <Link to={loc} className='ml-5'>
      <motion.img className="ml-5 mb-3"
        variants={loaderVariants}
        animate={'animationOne'}
        src="https://img.icons8.com/color-glass/48/000000/advance.png"/>

    </Link>
    </div>
  )
}

export default Loader;
