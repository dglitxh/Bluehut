
import { Col, Row } from 'antd'
import heroSvg from './utils/svgs/blocks.svg'
import mySvg from './utils/svgs/thoughts.svg'
import { motion  } from 'framer-motion'
import PageNav from './PageNav'


const About = () =>  {

  const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 4  }
      },
      exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
      }
    };

    return (
        <motion.div id="about" className="container info mt-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <h2 className='text-center'> About Us</h2>
        <Row >
        <Col xs={{span:24}} sm={{span:12}} lg={{span:12}} md={{span:12}}>
        <div data-aos="zoom-out-up" data-aos-duration="2000" className=" info-item">

          <img src={heroSvg} className="img-fluid info-img" alt="svg" />

        </div>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} md={{span:12}} lg={{span:12}} >
        <div data-aos="zoom-out-down"   className="info-item-text p-6 ">
        <h3>Background</h3>
          <p>
          BlueHut Engineering has provided multi-discipline
           engineering services to industrial and commercial
            clients since 2021. Our company nurtures an
            innovative problem-solving environment that
            presents fast and flexible responses to client
            needs. Having a  highly qualified and certified
            team at BlueHut, we offer complete engineering
            services from the commencement phase through
            detailed design and execution of projects.
          </p>
        </div>

        </Col>

        <Col xs={{span:24}} sm={{span:12}} md={{span:12}} lg={{span:12}} >
        <div data-aos="zoom-out-down" className="info-item-text p-6 ">
        <h3>Position Statement </h3>
          <p>
          Bluehut Engineering is a service provider that
          provides quality and accurate solutions and
          services to customers on all engineering project
          fronts.  We are the only service providers that
          provide the following:
          </p>
          <ul>
  <li>Best customer service and support on the market.</li>
    <li>Integrated engineering solutions for all aspects
    of projects from commencement to completion.</li>
      </ul>
        </div>

        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:12}} md={{span:12}}>
        <div data-aos="zoom-out-up"  data-aos-duration="2000" className=" info-item">

          <img src={mySvg} className="img-fluid info-img" alt="" />

        </div>
        </Col>

        </Row>

          <PageNav loc={'/services'} text="Next page"/>
        </motion.div>

    )
}


export default About
