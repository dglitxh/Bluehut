import { Row, Col, Image } from "antd"
import PageNav from './PageNav'
import { motion  } from 'framer-motion'


const Slider = () => {

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

    return(
      <motion.div id="about" className="container mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
              <h2 className="mb-10"> Gallery </h2>

              <div>
              <Image.PreviewGroup>
              <Row>
              <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                  <div className='mb-4 mt-4'>
                <Image
                  width={400}
                  height={270}
                  src={require('./utils/imgs/img1.jpg')}
                  alt='img'
                />
                </div>
              </Col>

              <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                  <div className='mb-4 mt-4'>
                <Image
                    width={400}
                    height={270}
                    src={require('./utils/imgs/img2.jpg')}
                    alt='img'
                />
                </div>
              </Col>

              <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                  <div className='mb-4 mt-4'>
                <Image
                  width={400}
                  height={270}
                  src={require('./utils/imgs/img3.jpg')}
                  alt='img'
                />
                </div>
              </Col>

              <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                  <div className='mb-4 mt-4'>
                <Image
                  width={400}
                  height={270}
                  src={require('./utils/imgs/img4.jpg')}
                  alt='img'
                />
                </div>
              </Col>

              <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                  <div className='mb-4 mt-4'>
                <Image
                  width={400}
                  height={270}
                  src={require('./utils/imgs/img5.jpg')}
                  alt='img'
                />
                </div>
              </Col>

              <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                  <div className='mb-4 mt-4'>
                <Image
                  width={400}
                  height={270}
                  src={require('./utils/imgs/img6.jpg')}
                  alt='img'
                />
                </div>
              </Col>

              </Row>

               </Image.PreviewGroup>
         </div>

            <PageNav loc={'/about'} text="Next page"/>
        </motion.div>
    )
}

export default Slider
