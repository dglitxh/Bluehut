import React from 'react';
import { Button, Row, Col } from 'antd'
import { motion } from 'framer-motion';
import ReactTyped from 'react-typed';
import heroSvg from './utils/svgs/build.svg'




const Hero = () =>  {

    return (
        <div className='container'>
    <Row >
      <Col sm={{span:24}} lg={{span:12}} md={{span:24}}>
     
              <br/>
      <motion.div className="hero"
           animate={{ x: [-1000, 100, -100, 0]}}
           transition={{ ease: "easeOut", duration: 2 }}
       >
          
        <h1 className="">
          A household Name in <span><ReactTyped
                    strings={['Management',
                    'Consultancy',
                    'Quality Assurance'
                  ]}
                    typeSpeed={90}
                    backSpeed={80}
                    loop
                />
          </span> And Everything Engineering
              </h1>
        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, 
        the world’s most popular front-end open source toolkit.
       
        </p>
          <Button type="primary" size="large" className="hero-button">
            Start Exploring
          </Button>
      </motion.div>
      </Col>
      <Col xs={{span:0}} sm={{span:0}} md={{span:0}} lg={{span:12}} > 
      <div className="hero-img">
        <motion.img
          animate={{ scale: [0.2, 1.5, 1] }}
          transition={{ ease: "easeOut", duration: 2 }}
         src={heroSvg} className="img-fluid" alt="svg" loading="lazy" />
      </div>
      </Col>
    </Row>
        </div>
    )
}


export default Hero