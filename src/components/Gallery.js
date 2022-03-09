import { Row, Col, Image } from "antd"
import PageNav from './PageNav'
import { motion  } from 'framer-motion'
import { pictures } from './assets/data'



const Gallery = () => {

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
      <motion.div id="gallery" className="container mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
              <h2 className="mb-10"> Gallery </h2>

              <div>
              <Image.PreviewGroup>
              <Row >

              {pictures.map((pic) => {
                return(
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                    <div key={pic.id}
                      data-aos="zoom-out-down" data-aos-duration="1500" className="info-card">
                      <Image
                      className='rounded-2xl'
                        alt="icon" src={pic.img}/>
              </div>

              </Col>

                )
              })
             }

              </Row>
               </Image.PreviewGroup>

         </div>
            <PageNav loc={'/pricing'} />
        </motion.div>
    )
}

export default Gallery
