import { Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import PageNav from './PageNav'
import { motion  } from 'framer-motion'




const Slider = () => {



    const contentStyle = {
        color: '#fff',
        textAlign: 'center',
        background: 'black',
        height: '760px',
        width: '100vw'
      };

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
      <motion.div id="about" className="container info mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
              <h2 className="mt-5 mb-10"> Gallery </h2>
            <Carousel effect="fade" autoplay arrows prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined/>}>
                <div>
                  <img style={contentStyle} className=' img-fluid' src={require('./utils/imgs/img1.jpg')} alt='img'   />
                </div>
                <div>
                    <img style={contentStyle} className=' img-fluid' src={require('./utils/imgs/img2.jpg')} alt='img' height='500'  />
                </div>
                <div>
                    <img style={contentStyle} className='img-fluid' src={require('./utils/imgs/img3.jpg')} alt='img' height='500'  />
                </div>
                <div>
                    <img style={contentStyle} className=' img-fluid' src={require('./utils/imgs/img4.jpg')} alt='img' height='500'  />
                </div>
              </Carousel>,
            <PageNav loc={'/about'} text="Next page"/>
        </motion.div>
    )
}

export default Slider
